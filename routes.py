from pathlib import Path
from simplification.cutil import simplify_coords
import xml.etree.ElementTree as ET
import subprocess
import gpxpy


# @r CONFIG
TOLERANCE = 0.0001
APPEND_MODE = True
ROADS_MODE = True
YEAR = 0 # 0 if all

# @p Setup paths
script_dir = Path(__file__).parent.resolve()

if ROADS_MODE:
    base_folder = script_dir / "Drogi" / "Zestawienie"
elif YEAR == 0:
    base_folder = script_dir / "Trasy"
else:
    base_folder = script_dir / "Trasy" / str(YEAR)

output_file = script_dir / "routes.js"

# @p Activities
activity_emojis = {
    "walking": "🚶",
    "hiking": "🥾",
    "cycling": "🚴",
    "downhill_skiing": "🎿",
    "transport_car": "🚗",
    "transport_public": "🚌",
    "europe_transport_public": "🚌",
    "europe_transport_boat": "🚢",
    "europe_walking": "🚶",
}

# @r FUNCTIONS

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

    # Namespace dla locus
    LOCUS_NS = "{http://www.locusmap.eu}"

    for trk in gpx.tracks:
        # trk.extensions to lista Elementów XML z xml.etree.ElementTree
        if not trk.extensions:
            continue
        for ext in trk.extensions:
            # szukamy w rozszerzeniach elementu locus:activity
            for elem in ext.iter():
                local_name = elem.tag.split('}')[-1] if '}' in elem.tag else elem.tag
                ns = elem.tag.split('}')[0] + "}" if '}' in elem.tag else ''
                if local_name == "activity" and ns == LOCUS_NS:
                    return elem.text.strip() if elem.text else None
    return None

# @b Get activity icon
def get_activity_icon(activity: str) -> str:
    if not activity:
        return "❓"
    return activity_emojis.get(activity.lower(), "❓")

# @b Extract data from GPX file
def extract_data(gpx_path):
    try:
        with gpx_path.open('r', encoding='utf-8') as f:
            gpx = gpxpy.parse(f)
            name = get_name(gpx)
            segments = get_segments(gpx)
            activity = get_activity(gpx)
            range = get_range(activity, ROADS_MODE)

            if not segments:
                return []
            if len(segments) == 1:
                # Return single segment with plain name
                return [(name, range, activity, segments[0])]
            else:
                # Return multiple segments with numbered names
                return [(f"{name} {i+1}/{len(segments)}", range, activity, seg) for i, seg in enumerate(segments)]
    except Exception as e:
        print(f"❌ Error parsing {gpx_path}: {e}")
        return []



# @b Format data into JS object
def format_route_entry(name, icon, range, activity, coords):
    lines = [f"  {{ name: '{name}', icon: '{icon}', range: '{range}', activity: '{activity}', coords: ["]
    for item in coords:
        if item is None:
            continue
        else:
            lon, lat = item
            lines.append(f"    [{lat:.7f}, {lon:.7f}],")
    lines.append("  ] },")
    return "\n".join(lines)


# @b Set file hidden
def set_file_hidden(filepath, hide=True):
    try:
        subprocess.run(['attrib', '+H' if hide else '-H', str(filepath)], check=True, shell=True)
    except Exception as e:
        print(f"⚠️ Couldn't {'hide' if hide else 'unhide'} file: {e}")


# @r MAIN PROCESSING

# Unhide output file before writing
set_file_hidden(output_file, hide=False)  

new_entries = []

# @p Extract and format data
for gpx_file in base_folder.rglob('*.gpx'):
    extracted = extract_data(gpx_file)
    for name, range, activity, coords in extracted:
        icon = get_activity_icon(activity)
    
        if range == "POLSKA":
            print(f"✅ 🇵🇱 {icon} {name} -> {activity}")
        elif range == "EUROPA":
            print(f"✅ 🇪🇺 {icon} {name} -> {activity}")
        elif range == "GÓRY":
            print(f"✅ 🇬🇾 {icon} {name} -> {activity}")
        elif range == "DROGI":
            print(f"✅ 🇩🇬 {name} ")
        else:
            print(f"🟥❌ {icon} {name} -> {range} -> {activity} ")

        new_entries.append(format_route_entry(name, icon, range, activity, coords))


# @p Write data to JS file
if not new_entries:
    print("⚠️ No routes found.")
else:
    if APPEND_MODE and output_file.exists():
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
print(f"🏆 {'Appended' if APPEND_MODE else 'Wrote'} {len(new_entries)} routes!")
