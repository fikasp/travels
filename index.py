import pandas as pd
import subprocess
import json

print("🌍 Excel to JS converter:")

# Load Excel file
sheet_name = 'Zestawienie'
file_path = 'b:\\Prywatne\\Wycieczki\\Travels.xlsx'
df = pd.read_excel(file_path, sheet_name=sheet_name, dtype=str)

# Define categories and ranges
const_definitions = """
const cat = {
  all: "Wszystkie",
  profil: "Profilówki",
  general: "Ogólne",
  gastro: "Gastronomia",
  history: "Historia", 
  religion: "Religia",
  culture: "Kultura", 
  nature: "Natura", 
}
const ranges = {
  mountains: "GÓRY",
  poland: "POLSKA",
  world: "EUROPA"
}
const startCity = "KRAKÓW"
const mapActive = true
"""

# Category mapping
category_map = {
    "Natura": "cat.nature",
    "Kultura": "cat.culture",
    "Historia": "cat.history",
    "Religia": "cat.religion",
    "Gastronomia": "cat.gastro",
    "Ogólne": "cat.general",
    "Profilówki": "cat.profil",
    "Wszystkie": "cat.all"
}

# Range mapping
ranges_map = {
    "GÓRY": "ranges.mountains",
    "POLSKA": "ranges.poland",
    "EUROPA": "ranges.world"
}

# Initialize data structure
output = {ranges_map["GÓRY"]: {}, ranges_map["POLSKA"]: {}, ranges_map["EUROPA"]: {}}

# Track the last processed range and region
last_region = None
last_range = None

for _, row in df.iterrows():
    range_raw, region, city, abbr, zoom, coors, date, category, description, top = row

    # Skip rows without a valid region
    if not pd.notna(region) or not pd.notna(range_raw):
        continue
    
    # Determine the target range
    range = ranges_map.get(range_raw.strip(), None)
    if not range:
        continue

    # Prepare abbr
    abbr = abbr.strip() if pd.notna(abbr) else None

    # Convert coordinates
    coor = [float(x) for x in coors.split(",")] if pd.notna(coors) else None

    # Convert zoom level
    zoom = int(zoom) if pd.notna(zoom) and str(zoom).isdigit() else None

    # Convert date values
    date_list = [int(d) for d in date.split(",") if d.strip().isdigit()] if pd.notna(date) else []

    # Add the region to the range
    if region not in output[range]:
        output[range][region] = {"coor": coor, "zoom": zoom}

    # Skip adding city object if city is empty
    if not pd.notna(city):
        continue
    
    # Add the city
    if city not in output[range][region]:
        city_obj = {"abbr": abbr} if range == "ranges.poland" else {}
        city_obj.update({
            "coor": coor,
            "date": date_list,
            "zoom": zoom,
            "gallery": []
        })
        output[range][region][city] = city_obj

    # Add gallery data
    if pd.notna(description):
        catg = category_map.get(category, "cat.general")
        gallery_item = {
            "catg": catg, 
            "name": description, 
            "coor": coor, 
            "date": date_list
        }
        if top == "Tak":
            gallery_item["top"] = True
        output[range][region][city]["gallery"].append(gallery_item)

    # If the region changes, print a log message
    if last_region and (region != last_region or range_raw.strip() != last_range):
        print(f"✅ Processed region: {last_range}/{last_region}")

    last_range = range_raw.strip()
    last_region = region

# Final region processing log
if last_region:
    print(f"✅ Processed region: {last_range}/{last_region}")

# Convert to JavaScript
js_output = const_definitions + "\nconst data = " + json.dumps(output, indent=2, ensure_ascii=False)
js_output = js_output.replace('"catg"', 'catg')
js_output = js_output.replace('"coor"', 'coor')
js_output = js_output.replace('"date"', 'date')
js_output = js_output.replace('"name"', 'name')
js_output = js_output.replace('"gallery"', 'gallery')
js_output = js_output.replace('"zoom"', 'zoom')

# Replace category and range values
for key in category_map.values():
    js_output = js_output.replace(f'"{key}"', key)

for key in ranges_map.values():
    js_output = js_output.replace(f'"{key}"', f'[{key}]')

# Output file path
outputPath = "index.js"

# Remove hidden attribute before writing
subprocess.run(['attrib', '-H', outputPath], shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

# Write output file
with open(outputPath, "w", encoding="utf-8") as f:
    f.write(js_output)

# Set file as hidden
subprocess.run(['attrib', '+H', outputPath], shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

print("🏆 Conversion done!")