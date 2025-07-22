from pathlib import Path
from simplification.cutil import simplify_coords
import subprocess
import gpxpy


# @r CONFIG

TOLERANCE = 0.0001
APPEND_MODE = False
YEAR = 2025 # 0 if all

# @p Setup paths
script_dir = Path(__file__).parent.resolve()
base_folder = script_dir / "Trasy" if YEAR == 0 else script_dir / "Trasy" / str(YEAR)
output_file = script_dir / "routes.js"


# @r FUNCTIONS

# @b Get name
def get_name(gpx):
    for trk in gpx.tracks:
        if trk.name:
            return trk.name.strip()
    return "Brak nazwy"


# @b Get range
def get_range(gpx):
    for trk in gpx.tracks:
        if trk.type:
            return trk.type.strip()
    return "POLSKA"


# @b Get coordinates
def get_coords(gpx):
    all_segments = []
    for trk in gpx.tracks:
        for seg in trk.segments:
            segment_coords = [[pt.longitude, pt.latitude] for pt in seg.points]
            if segment_coords:
                simplified = simplify_coords(segment_coords, TOLERANCE)
                all_segments.append(simplified)
    return all_segments if all_segments else None


# @b Extract data from GPX file
def extract_data(gpx_path):
    try:
        with gpx_path.open('r', encoding='utf-8') as f:
            gpx = gpxpy.parse(f)
            name = get_name(gpx)
            range = get_range(gpx)
            segments = get_coords(gpx)
            if not segments:
                return []
            if len(segments) == 1:
                # Return single segment with plain name
                return [(name, range, segments[0])]
            else:
                # Return multiple segments with numbered names
                return [(f"{name} {i+1}/{len(segments)}", range, seg) for i, seg in enumerate(segments)]
    except Exception as e:
        print(f"❌ Error parsing {gpx_path}: {e}")
        return []



# @b Format data into JS object
def format_route_entry(name, coords, range):
    lines = [f"  {{ name: '{name}', range: '{range}', coords: ["]
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
    for name, range, coords in extracted:
        if range == "POLSKA":
            print(f"✅ 🇵🇱 {name}")
        elif range == "EUROPA":
            print(f"✅ 🇪🇺 {name}")
        elif range == "GÓRY":
            print(f"✅ 🇬🇾 {name}")
        else:
            print(f"🟥 ❌ {name} -> {range} ")

        new_entries.append(format_route_entry(name, coords, range))


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
