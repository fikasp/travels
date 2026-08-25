from pathlib import Path
from datetime import datetime
from Tools.Tools import set_file_hidden
from Tools.Tools import set_file_unhidden
from simplification.cutil import simplify_coords
import xml.etree.ElementTree as ET
import gpxpy
import math
import json

#------------------------
# @g CONFIG
#------------------------
YEAR = 0
MONTH = 0

APPEND_MODE = True
MANIFEST_FILE = "routes.json"

activities = {
    'hiking': '🥾',
    'walking': '🚶',
    'cycling': '🚴',
    'transport_car': '🚗',
    'transport_public': '🚌',
    'transport_train': '🚆',
    'transport_truck': '🛣️',
    'transport_boat': '🛳️ ',
    'downhill_skiing': '🎿',
}

#------------------------
# @g FUNCTIONS
#------------------------

# @b Get name
#------------------------
def get_name(gpx):
    """
    Extract the first available track name from the GPX file.
    Returns 'No name' if none found.
    """
    for trk in gpx.tracks:
        if trk.name:
            return trk.name.strip()
    return "Brak nazwy"


# @b Get year
#------------------------
def get_year(name, range):
    """
    Extract year from the first 4 characters of the name and return:
    - the year if it is in the past or in the future,
    - the year if it is the current year and the month is not in the future,
    - 0 if the month is in the future within the current year or date not found
    """
    try:
        year_str = name[:4]
        year = int(year_str)
        today = datetime.today()
        current_year = today.year
        current_month = today.month

        if year < current_year:
            return year
        elif year > current_year:
            return year
        else:
            if len(name) >= 7:
                month_str = name[5:7]
                if month_str.isdigit():
                    month = int(month_str)
                    if 1 <= month <= 12:
                        return year if month < current_month else 0
            return year
    except Exception:
        return 0


# @b Get range
#------------------------
def get_range(activity):
    """
    Determines the range based on the activity string:
    - Returns 'ŚWIAT' if the activity starts with 'world_'
    - Returns 'POLSKA' in all other cases or if activity is None
    """
    if activity:
        activity = activity.strip().lower()
        if activity.startswith("world_"):
            return "EUROPA"
    return "POLSKA"


# @b Get segments
#------------------------
def get_segments(gpx, tolerance=0.0001, merge_threshold_meters=100):
    """
    Extract and simplify segments from GPX tracks.
    Merge consecutive segments if their endpoints are closer than merge_threshold_meters.
    Returns a list of simplified segments (list of [lon, lat] points).
    """

    # Check if two points are close enough to merge (threshold in meters)
    def are_points_close(pt1, pt2):
        lon1, lat1 = pt1
        lon2, lat2 = pt2
        dist = calculate_distance(lon1, lat1, lon2, lat2) * 1000
        return dist <= merge_threshold_meters

    # Extract and simplify all segments from the GPX tracks
    all_segments = []
    for trk in gpx.tracks:
        for seg in trk.segments:
            segment_coords = [[pt.longitude, pt.latitude] for pt in seg.points]
            if segment_coords:
                simplified = simplify_coords(segment_coords, tolerance)
                all_segments.append(simplified)

    if not all_segments:
        return None

    # Merge segments if the end of one is close to the start of the next
    merged_segments = [all_segments[0]]
    for seg in all_segments[1:]:
        last_segment = merged_segments[-1]
        if are_points_close(last_segment[-1], seg[0]):
            # Concatenate segments if endpoints are close
            merged_segments[-1] = last_segment + seg
        else:
            merged_segments.append(seg)

    return merged_segments


# @b Get activity
#------------------------
def get_activity(gpx):
    """
    Extract 'activity' metadata from GPX extensions using the Locus Map namespace.
    Returns the activity string or None if not found.
    """
    LOCUS_NS = "{http://www.locusmap.eu}"

    for trk in gpx.tracks:
        if not trk.extensions:
            continue
        for ext in trk.extensions:
            for elem in ext.iter():
                local_name = elem.tag.split('}')[-1] if '}' in elem.tag else elem.tag
                ns = elem.tag.split('}')[0] + "}" if '}' in elem.tag else ''
                if local_name == "activity" and ns == LOCUS_NS:
                    return elem.text.strip() if elem.text else None
    return None


# @b Get activity icon
#------------------------
def get_activity_icon(activity):
    """
    Return the emoji icon representing the activity.
    Default to '❓' if unknown.
    """
    if not activity:
        return "❓"
    return activities.get(activity.lower(), "❓")


# @b Calculate distance between points
#------------------------
def calculate_distance(lon1, lat1, lon2, lat2):
    """
    Calculate the great-circle distance between two geographic points using the Haversine formula.
    Returns distance in kilometers.
    """
    R = 6371.0
    phi1 = math.radians(lat1)
    phi2 = math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dlambda = math.radians(lon2 - lon1)
    a = math.sin(dphi / 2.0)**2 + math.cos(phi1) * math.cos(phi2) * math.sin(dlambda / 2.0)**2
    return 2 * R * math.atan2(math.sqrt(a), math.sqrt(1 - a))


# @b Calculate total length of the route
#------------------------
def calculate_total_length(coords):
    """
    Calculate total length of a route given a list of [lon, lat] points.
    Returns length in kilometers.
    """
    if not coords or len(coords) < 2:
        return 0.0

    total = 0.0
    for i in range(1, len(coords)):
        try:
            lon1, lat1 = coords[i - 1]
            lon2, lat2 = coords[i]
            total += calculate_distance(lon1, lat1, lon2, lat2)
        except Exception as e:
            print(f"⚠️ Error in point {i}: {coords[i-1]} -> {coords[i]} | {e}")
    return total


# @b Extract data from GPX file
#------------------------
def extract_data(gpx_path):
    """
    Parse a GPX file and extract route name, activity, range category, and simplified segments.
    Returns a list of tuples: (name, range, activity, coords).
    If multiple segments exist, names are numbered.
    """
    try:
        with gpx_path.open('r', encoding='utf-8') as f:
            gpx = gpxpy.parse(f)
            name = get_name(gpx)
            segments = get_segments(gpx)
            activity = get_activity(gpx)
            range_ = get_range(activity)

            # Remove "world_" prefix from the activity name if it exists
            if activity and activity.startswith("world_"):
                activity = activity[len("world_"):]

            if not segments:
                return []
            if len(segments) == 1:
                # Return single segment with plain name
                return [(name, range_, activity, segments[0])]
            else:
                # Return multiple segments with numbered names
                return [(f"{name} {i+1}/{len(segments)}", range_, activity, seg) for i, seg in enumerate(segments)]
    except Exception as e:
        print(f"❌ Error parsing {gpx_path}: {e}")
        return []


# @b Format data into JS object
#------------------------
def format_route_entry(name, icon, range_, activity, year, length, coords):
    """
    Format route data into a JavaScript object string for export.
    Coordinates are reordered to [lat, lon] for JS.
    """
    lines = [
        "  {",
        f"    name: '{name}',",
        f"    range: '{range_}',",
        f"    activity: '{activity}',",
        f"    icon: '{icon}',",
        f"    year: {year},",
        f"    length: {length:.2f},",
        "    coords: ["
    ]
    for item in coords:
        if item is None:
            continue
        lon, lat = item
        lines.append(f"      [{lat:.7f}, {lon:.7f}],")
    lines.append("    ]")
    lines.append("  },")
    return "\n".join(lines)


# @b Get base folder
#------------------------
def get_base_folder(script_dir: Path, year: int, month: int) -> Path:
    """
    Determine the base folder path to search GPX files based on the config.
    """
    if year == 0:
        return script_dir
    if month == 0:
        return script_dir / "Trasy" / str(year)
    if 1 <= month <= 12:
        month_str = f"{year}-{month:02d}"
        return script_dir / "Trasy" / str(year) / month_str
    raise ValueError(f"Invalid month: {month}")


# @b Get file signature
#------------------------
def get_file_signature(gpx_path: Path):
    """
    Return a lightweight signature (size, mtime) used to detect
    whether a GPX file has changed since it was last processed.
    """
    stat = gpx_path.stat()
    return [stat.st_size, stat.st_mtime]


# @b Load manifest
#------------------------
def load_manifest(manifest_path: Path) -> dict:
    """
    Load the cache of previously processed GPX files (path -> signature + entries).
    Returns an empty dict if the manifest doesn't exist or is corrupted.
    """
    if not manifest_path.exists():
        return {}
    try:
        with manifest_path.open('r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"⚠️ Nie udało się wczytać manifestu ({e}) — pełna reanaliza plików.")
        return {}


# @b Save manifest
#------------------------
def save_manifest(manifest_path: Path, manifest: dict):
    """
    Persist the cache of processed GPX files to disk.
    """
    with manifest_path.open('w', encoding='utf-8') as f:
        json.dump(manifest, f, ensure_ascii=False)

#------------------------
# @g MAIN
#------------------------
def main():
    """
    Main processing function for extracting GPX 
    route data and generating a JavaScript routes file.
    - Determine input and output directories based on configuration
    - Recursively scan for GPX files and extract route details (name, activity, segments)
    - Calculate route lengths and assign icons based on activity type
    - Print status messages with corresponding flags and icons
    - Write or append formatted route entries to a 'routes.js' file
    - Manage file attributes to hide/unhide output file on Windows
    """

    # Print header
    print("🌍 GPX routes converter:")

    # Set up input and output paths
    project_dir = Path(__file__).parent.parent.resolve()
    base_folder = get_base_folder(project_dir, YEAR, MONTH)
    print(base_folder)

    output_file = project_dir / "Code/routes.js"

    # Unhide output file before writing
    set_file_unhidden(output_file)  

    new_entries = []

    # Path manifest to cache already parsed GPX files
    manifest_path = project_dir / "Code" / MANIFEST_FILE
    old_manifest = load_manifest(manifest_path) if APPEND_MODE else {}
    new_manifest = {}

    skipped_count = 0

    # @b Extract and format data
    #------------------------
    for gpx_file in base_folder.rglob('*.gpx'):

        excluded_folders = {"Stoki", "Archiwa"}
        if any(folder in gpx_file.parts for folder in excluded_folders):
            continue

        key = str(gpx_file.relative_to(project_dir))
        signature = get_file_signature(gpx_file)

        # File unchanged since last run - use cached entries
        cached = old_manifest.get(key)
        if APPEND_MODE and cached and cached.get("signature") == signature:
            new_manifest[key] = cached
            new_entries.extend(cached["entries"])
            skipped_count += 1
            continue

        extracted = extract_data(gpx_file)
        file_entries = []
        for name, range_, activity, coords in extracted:
            length = calculate_total_length(coords)
            icon = get_activity_icon(activity)
            year = get_year(name, range_)
        
            if range_ == "POLSKA":
                print(f"✅ 🇵🇱 {icon} {name}")
            elif range_ == "EUROPA":
                print(f"✅ 🇪🇺 {icon} {name}")
            else:
                print(f"🟥❌ {icon} {name} -> {range_}")

            file_entries.append(format_route_entry(name, icon, range_, activity, year, length, coords))

        new_manifest[key] = {"signature": signature, "entries": file_entries}
        new_entries.extend(file_entries)

    if APPEND_MODE:
        save_manifest(manifest_path, new_manifest)
        print(f"⏭️  Skipped {skipped_count} files.")


    # @b Write data to JS file
    #------------------------
    if not new_entries:
        print("⚠️ No routes found.")
    else:
        with output_file.open('w', encoding='utf-8') as f:
            f.write("const routes = [\n")
            f.write("\n".join(new_entries))
            f.write("\n]\n")

    # set_file_hidden(output_file)  

    # summary
    print(f"🏆 Wrote {len(new_entries)} routes!")


if __name__ == "__main__":
    main()