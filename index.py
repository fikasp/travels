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

for _, row in df.iterrows():
    range, region, city, zoom, coors, date, category, description = row
    
    # Skip rows without a valid region
    if not pd.notna(region) or not pd.notna(range):
        continue
    
    # Determine the target range
    range_key = ranges_map.get(range.strip(), None)
    if not range_key:
        continue
    
    # Convert coordinates to a list of numbers
    coor = [float(x) for x in coors.split(",")] if pd.notna(coors) else None
    
    # Convert zoom to an integer (or None if missing)
    zoom = int(zoom) if pd.notna(zoom) and zoom.isdigit() else None
    
    # Convert date to a list of numbers (or empty list if missing)
    date_list = [int(d) for d in date.split(",") if d.strip().isdigit()] if pd.notna(date) else []
    
    # Add region to the appropriate range
    if region not in output[range_key]:
        output[range_key][region] = {"coor": coor, "zoom": zoom}
    
    # Skip adding city object if city is empty
    if not pd.notna(city):
        continue
    
    # Add city
    if city not in output[range_key][region]:
        output[range_key][region][city] = {"coor": coor, "date": date_list, "zoom": zoom, "gallery": []}
    
    # Add gallery entry
    if pd.notna(description):
        catg = category_map.get(category, "cat.general")
        output[range_key][region][city]["gallery"].append({
            "catg": catg, "name": description, "coor": coor,  "date": date_list
        })

# Convert to JS format
js_output = const_definitions + "\nconst data = " + json.dumps(output, indent=2, ensure_ascii=False)
js_output = js_output.replace('"catg"', 'catg')
js_output = js_output.replace('"coor"', 'coor')
js_output = js_output.replace('"date"', 'date')
js_output = js_output.replace('"name"', 'name')
js_output = js_output.replace('"gallery"', 'gallery')
js_output = js_output.replace('"zoom"', 'zoom')

# Replace all category references in js_output
for key in category_map.values():
    js_output = js_output.replace(f'"{key}"', key)

# Replace all range references in js_output
for key in ranges_map.values():
    js_output = js_output.replace(f'"{key}"', f'[{key}]')

# Output file path
outputPath = "index.js"

# Remove hidden attribute before writing the file
subprocess.run(['attrib', '-H', outputPath], shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

# Write data to the JS file
with open(outputPath, "w", encoding="utf-8") as f:
    f.write(js_output)

# Set hidden attribute after writing the file
subprocess.run(['attrib', '+H', outputPath], shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

print("File index.js has been generated and hidden!")
