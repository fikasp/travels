from pathlib import Path
from simplification.cutil import simplify_coords
import xml.etree.ElementTree as ET
import math
import subprocess
import gpxpy


# @g CONFIG
TOLERANCE = 0.0001
APPEND_MODE = False
ROADS_MODE = False
YEAR = 0 # 0 if all

# @b Setup paths
script_dir = Path(__file__).parent.resolve()

if ROADS_MODE:
    base_folder = script_dir / "Drogi" / "Zestawienie"
elif YEAR == 0:
    base_folder = script_dir / "Trasy"
else:
    base_folder = script_dir / "Trasy" / str(YEAR)

output_file = script_dir / "routes.js"

# @b Activities
activities = {
    'transport_car': '🚗',
    'cycling': '🚴',
    'walking': '🚶',
    'hiking': '🥾',
    'downhill_skiing': '🎿',
    'transport_public': '🚌',
    'transport_train': '🚆',
}

# @g FUNCTIONS

# @b Get name
def get_name(gpx):
    for trk in gpx.tracks:
        if trk.name:
            return trk.name.strip()
    return "Brak nazwy"


# @b Get range
def get_range(activity, roads_mode=False):
    if roads_mode:
        return "DROGI"
    if activity:
        activity = activity.strip().lower()
        if activity == "hiking":
            return "GÓRY"
        elif activity.startswith("europe_"):
            return "EUROPA"
    return "POLSKA"


# @b Get coordinates
def get_segments(gpx):
    all_segments = []
    for trk in gpx.tracks:
        for seg in trk.segments:
            segment_coords = [[pt.longitude, pt.latitude] for pt in seg.points]
            if segment_coords:
                simplified = simplify_coords(segment_coords, TOLERANCE)
                all_segments.append(simplified)
    return all_segments if all_segments else None


# @b Get activity
def get_activity(gpx):

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
def get_activity_icon(activity):
    if not activity:
        return "❓"
    return activities.get(activity.lower(), "❓")


# @b Calculate distance between points
def calculate_distance(lon1, lat1, lon2, lat2):
    R = 6371.0
    phi1 = math.radians(lat1)
    phi2 = math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dlambda = math.radians(lon2 - lon1)
    a = math.sin(dphi / 2.0)**2 + math.cos(phi1) * math.cos(phi2) * math.sin(dlambda / 2.0)**2
    return 2 * R * math.atan2(math.sqrt(a), math.sqrt(1 - a))


# @b Calculate total length of the route
def calculate_total_length(coords):
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
def extract_data(gpx_path):
    try:
        with gpx_path.open('r', encoding='utf-8') as f:
            gpx = gpxpy.parse(f)
            name = get_name(gpx)
            segments = get_segments(gpx)
            activity = get_activity(gpx)
            range_ = get_range(activity, ROADS_MODE)

            if activity and activity.startswith("europe_"):
                activity = activity[len("europe_"):]

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
def format_route_entry(name, icon, range_, activity, length, coords):
    lines = [
        "  {",
        f"    name: '{name}',",
        f"    range: '{range_}',",
        f"    activity: '{activity}',",
        f"    icon: '{icon}',",
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


# @b Set file hidden
def set_file_hidden(filepath, hide=True):
    try:
        subprocess.run(['attrib', '+H' if hide else '-H', str(filepath)], check=True, shell=True)
    except Exception as e:
        print(f"⚠️ Couldn't {'hide' if hide else 'unhide'} file: {e}")


# @g MAIN PROCESSING

# Unhide output file before writing
set_file_hidden(output_file, hide=False)  

new_entries = []

# @b Extract and format data
for gpx_file in base_folder.rglob('*.gpx'):
    extracted = extract_data(gpx_file)
    for name, range_, activity, coords in extracted:
        icon = get_activity_icon(activity)
        length = calculate_total_length(coords)
    
        if range_ == "POLSKA":
            print(f"✅ 🇵🇱 {icon} {name}")
        elif range_ == "EUROPA":
            print(f"✅ 🇪🇺 {icon} {name}")
        elif range_ == "GÓRY":
            print(f"✅ 🇬🇾 {icon} {name}")
        elif range_ == "DROGI":
            print(f"✅ 🇩🇬 {name} ")
        else:
            print(f"🟥❌ {icon} {name} -> {range_}")

        new_entries.append(format_route_entry(name, icon, range_, activity, length, coords))


# @b Write data to JS file
if not new_entries:
    print("⚠️ No routes found.")
else:
    if (APPEND_MODE or ROADS_MODE) and output_file.exists():
        # Append mode
        with output_file.open('r+', encoding='utf-8') as f:
            content = f.read().rstrip()
            if content.endswith("]\n"):
                content = content[:-2]
            elif content.endswith("]"):
                content = content[:-1]
            if not content.strip().endswith("["):
                content += ",\n"
            content += "\n" + "\n".join(new_entries) + "\n]"
            f.seek(0)
            f.write(content)
            f.truncate()
    else:
        # Overwrite mode
        with output_file.open('w', encoding='utf-8') as f:
            f.write("const routes = [\n")
            f.write("\n".join(new_entries))
            f.write("\n]\n")

# Re-hide the output file
set_file_hidden(output_file)  

# Summary
print(f"🏆 {'Appended' if (APPEND_MODE or ROADS_MODE) else 'Wrote'} {len(new_entries)} routes!")
