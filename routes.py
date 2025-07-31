from pathlib import Path
from datetime import datetime
from simplification.cutil import simplify_coords
import xml.etree.ElementTree as ET
import math
import subprocess
import gpxpy


# @g CONFIG
YEAR = 0
MONTH = 0

# @b activities
activities = {
    'hiking': '🥾',
    'walking': '🚶',
    'cycling': '🚴',
    'transport_car': '🚗',
    'transport_public': '🚌',
    'transport_train': '🚆',
    'transport_boat': '🛳️',
    'downhill_skiing': '🎿',
    'roads': '🛣️'
}

# @g FUNCTIONS

# @b get name
def get_name(gpx):
    """
    Extract the first available track name from the GPX file.
    Returns 'No name' if none found.
    """
    for trk in gpx.tracks:
        if trk.name:
            return trk.name.strip()
    return "Brak nazwy"


# @b get year
def get_year(name):
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
                        return year if month <= current_month else 0
            return year
    except Exception:
        return 0


# @b get range
def get_range(activity):
    """
    Determines the range based on the activity string:
    - Returns 'GÓRY' if the activity is 'hiking'
    - Returns 'DROGI' if the activity is exactly 'roads'
    - Returns 'ŚWIAT' if the activity starts with 'world_'
    - Returns 'POLSKA' in all other cases or if activity is None
    """
    if activity:
        activity = activity.strip().lower()
        if activity == "roads":
            return "DROGI"
        elif activity.startswith("world_"):
            return "ŚWIAT"
    return "POLSKA"


# @b get segments
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


# @b get activity
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


# @b get activity icon
def get_activity_icon(activity):
    """
    Return the emoji icon representing the activity.
    Default to '❓' if unknown.
    """
    if not activity:
        return "❓"
    return activities.get(activity.lower(), "❓")


# @b calculate distance between points
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


# @b calculate total length of the route
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


# @b extract data from GPX file
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


# @b format data into JS object
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


# @b set file hidden
def set_file_hidden(filepath, hide=True):
    """
    Set or unset the Windows file hidden attribute using 'attrib' command.
    """
    try:
        subprocess.run(['attrib', '+H' if hide else '-H', str(filepath)], check=True, shell=True)
    except Exception as e:
        print(f"⚠️ Couldn't {'hide' if hide else 'unhide'} file: {e}")


# @b get base folder
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


# @g MAIN

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
    # Set up input and output paths
    script_dir = Path(__file__).parent.resolve()
    base_folder = get_base_folder(script_dir, YEAR, MONTH)
    output_file = script_dir / "routes.js"

    # Unhide output file before writing
    set_file_hidden(output_file, hide=False)  

    new_entries = []

    # @b extract and format data
    for gpx_file in base_folder.rglob('*.gpx'):

        excluded_folders = {"Stoki"}
        if any(folder in gpx_file.parts for folder in excluded_folders):
            continue

        extracted = extract_data(gpx_file)
        for name, range_, activity, coords in extracted:
            length = calculate_total_length(coords)
            icon = get_activity_icon(activity)
            year = get_year(name)
        
            if range_ == "POLSKA":
                print(f"✅ 🇵🇱 {icon} {name}")
            elif range_ == "ŚWIAT":
                print(f"✅ 🇪🇺 {icon} {name}")
            elif range_ == "DROGI":
                print(f"✅ 🇩🇬 {icon}  {name}")
            else:
                print(f"🟥❌ {icon} {name} -> {range_}")

            new_entries.append(format_route_entry(name, icon, range_, activity, year, length, coords))


    # @b write data to JS file
    if not new_entries:
        print("⚠️ No routes found.")
    else:
        if YEAR == 0:
            # Overwrite mode
            with output_file.open('w', encoding='utf-8') as f:
                f.write("const routes = [\n")
                f.write("\n".join(new_entries))
                f.write("\n]\n")
        elif output_file.exists():
            # Append mode
            with output_file.open('r+', encoding='utf-8') as f:
                content = f.read().rstrip()

                if content.endswith("]"):
                    content = content[:-1].rstrip()
                if not content.endswith(","):
                    content += ","
                content += "\n" + "\n".join(new_entries) + "\n]"
                f.seek(0)
                f.write(content)
                f.truncate()

    # re-hide the output file
    set_file_hidden(output_file)  

    # summary
    print(f"🏆 {'Wrote' if (YEAR == 0) else 'Appended'} {len(new_entries)} routes!")

if __name__ == "__main__":
    main()