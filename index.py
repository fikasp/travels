import pandas as pd
import subprocess
import json

# Load Excel file
sheet_name = 'Zestawienie'
file_path = 'b:\\Prywatne\\Wycieczki\\Wycieczki.xlsx'
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

# Track the last processed region
last_region = None

for _, row in df.iterrows():
    range, region, city, abbr, zoom, coors, date, category, description = row

    # Skip rows without a valid region
    if not pd.notna(region) or not pd.notna(range):
        continue
    
    # Determine the target range
    range = ranges_map.get(range.strip(), None)
    if not range:
        continue

    # Ensure 'abbr' is a valid string
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
        # Create the city object with 'abbr' first (only for POLSKA)
        city_obj = {"abbr": abbr} if range == "ranges.poland" else {}

        # Add other properties
        city_obj.update({
            "coor": coor,
            "date": date_list,
            "zoom": zoom,
            "gallery": []
        })

        # Store the city object in the output structure
        output[range][region][city] = city_obj

    # Add gallery data
    if pd.notna(description):
        catg = category_map.get(category, "cat.general")
        output[range][region][city]["gallery"].append({
            "catg": catg, "name": description, "coor": coor, "date": date_list
        })

    # If the region changes, print a log message
    if last_region and (region != last_region):
        print(f"✅ Processed region: {last_region}")

    # Update the last processed values
    last_region = region

# Final region processing log
if last_region:
    print(f"✅ Processed region: {last_region}")

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

print("🏆 All processes finished!")