import gpxpy
from simplification.cutil import simplify_coords
from pathlib import Path

TOLERANCE = 0.0001 
base_folder = Path(r'b:\Prywatne\Lifebook\Trasy')
output_file = Path(r'b:\Prywatne\Wycieczki\routes.js')

routes = []

for gpx_path in base_folder.rglob('*.gpx'):
    print(f"Przetwarzam plik: {gpx_path}")  # <-- tutaj log
    try:
        with gpx_path.open('r', encoding='utf-8') as gpx_file:
            gpx = gpxpy.parse(gpx_file)

        coords = []
        for track in gpx.tracks:
            for segment in track.segments:
                for point in segment.points:
                    coords.append([point.longitude, point.latitude])

        if not coords:
            continue

        simplified = simplify_coords(coords, TOLERANCE)

        # Względna ścieżka jako identyfikator
        relative_name = str(gpx_path.relative_to(base_folder)).replace('\\', '/')

        routes.append({
            'name': relative_name,
            'coords': simplified
        })

    except Exception as e:
        print(f"Błąd w pliku {gpx_path}: {e}")

# --- Zapis do routes.js ---
with output_file.open('w', encoding='utf-8') as f:
    f.write("const routes = [\n")
    for route in routes:
        f.write(f"  {{ name: '{route['name']}', coords: [\n")
        for lon, lat in route['coords']:
            f.write(f"    [{lat}, {lon}],\n")
        f.write("  ] },\n")
    f.write("]")

print(f"✔ Zapisano {output_file.name} ({len(routes)} tras)")
