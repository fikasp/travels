import gpxpy
from simplification.cutil import simplify_coords
from pathlib import Path
import subprocess

# CONFIGURATION
TOLERANCE = 0.0001
APPEND_MODE = True
YEAR = 2023

base_folder = Path(fr'b:\Prywatne\Lifebook\Trasy\{YEAR}')
output_file = Path(fr'b:\Prywatne\Wycieczki\routes.js')

def set_file_hidden(filepath, hide=True):
    try:
        subprocess.run(['attrib', '+H' if hide else '-H', str(filepath)], check=True, shell=True)
    except Exception as e:
        print(f"⚠️ Couldn't {'hide' if hide else 'unhide'} file: {e}")

def extract_coordinates(gpx_path):
    try:
        with gpx_path.open('r', encoding='utf-8') as f:
            gpx = gpxpy.parse(f)
        coords = [[pt.longitude, pt.latitude]
                  for trk in gpx.tracks
                  for seg in trk.segments
                  for pt in seg.points]
        return simplify_coords(coords, TOLERANCE) if coords else None
    except Exception as e:
        print(f"❌ Error parsing {gpx_path}: {e}")
        return None

def format_route_entry(name, coords):
    lines = [f"  {{ name: '{name}', coords: ["]
    for lon, lat in coords:
        lines.append(f"    [{lat:.7f}, {lon:.7f}],")
    lines.append("  ] },")
    return "\n".join(lines)

# Start processing
set_file_hidden(output_file, hide=False)

# Find new GPX routes
new_entries = []
for gpx_file in base_folder.rglob('*.gpx'):
    relative_name = str(gpx_file.relative_to(base_folder)).replace('\\', '/')
    print(f"📄 {relative_name}")
    coords = extract_coordinates(gpx_file)
    if coords:
        new_entries.append(format_route_entry(relative_name, coords))

if not new_entries:
    print("⚠️ No routes found.")
else:
    if APPEND_MODE and output_file.exists():
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
        with output_file.open('w', encoding='utf-8') as f:
            f.write("const routes = [\n")
            f.write("\n".join(new_entries))
            f.write("\n]\n")

set_file_hidden(output_file)
print(f"✅ {'Appended to' if APPEND_MODE else 'Wrote'} {output_file.name} ({len(new_entries)} routes)")
