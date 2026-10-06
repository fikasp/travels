import re
import json
import pandas as pd
import subprocess

#------------------------
# @g CONFIG
#------------------------
SHEET_NAME = 'Zestawienie'
INPUT_FILE = 'Travels.xlsx'
OUTPUT_FILE = "Code/Data/index.js"

#------------------------
# @g UTILITIES
#------------------------

# @b Write data to file
#------------------------
def write_data_to_file(file_path, content, encoding="utf-8"):
    """
    Write text content to a file using the specified encoding.
    """
    try:
        with open(file_path, "w", encoding=encoding) as f:
            f.write(content)
    except Exception as e:
        print(f"⚠️  Couldn't write to file {file_path}: {e}")


#------------------------
# @g FUNCTIONS
#------------------------
def process_data():
    """
    Processes Excel data and returns it as a formatted JavaScript string.
    """
    # Load Excel file
    try:
        df = pd.read_excel(INPUT_FILE, sheet_name=SHEET_NAME, dtype=str)
    except Exception as e:
        print(f"❌ Error reading Excel file: {e}")
        return

    # Initialize data structure
    output = {
        "ŚWIAT": {},
        "EUROPA": {}, 
        "POLSKA": {}, 
        "GÓRY": {}, 
        }

    # Track the last processed range and region
    last_region = None
    last_range = None

    for _, row in df.iterrows():
        range_raw, region, city, abbr, zoom, scale, coors, date, category, description = row

        # Skip rows without a valid region
        if not pd.notna(region) or not pd.notna(range_raw):
            continue
        
        # Determine the target range
        range_ = range_raw.strip()
        if not range_:
            continue

        # Convert coordinates
        coor = [float(x) for x in coors.split(",")] if pd.notna(coors) else None
        if not coor:
            continue

        # Prepare abbr
        abbr = abbr.strip() if pd.notna(abbr) else None

        # Convert zoom level
        zoom = int(zoom) if pd.notna(zoom) and str(zoom).isdigit() else None

        # Convert scale value 
        scale = float(scale) if pd.notna(scale) else 1

        # Convert date values
        date_list = [int(d) for d in date.split(",") if d.strip().isdigit()] if pd.notna(date) else []

        # Add the region to the range
        if region not in output[range_]:
            output[range_][region] = {"coor": coor, "zoom": zoom}

        # Skip adding city object if city is empty
        if not pd.notna(city):
            continue
        
        # Add the city
        if city not in output[range_][region]:
            city_obj = {}
            if range_ == "POLSKA" and abbr:
                city_obj["abbr"] = abbr
            city_obj.update({
                "coor": coor,
                "date": date_list,
                "zoom": zoom,
                "scale": scale,
                "gallery": []
            })
            output[range_][region][city] = city_obj

        # Add gallery data
        if pd.notna(description):
            gallery_item = {
                "catg": category, 
                "name": description,
                "scale": scale, 
                "coor": coor, 
                "date": date_list
            }
            if description.endswith(("Zewnętrze", "1")) :
                gallery_item["top"] = True
            output[range_][region][city]["gallery"].append(gallery_item)

        # If the region changes, print a log message
        if last_region and (region != last_region or range_raw.strip() != last_range):
            print(f"✅ {last_range}/{last_region}")

        last_range = range_raw.strip()
        last_region = region

    # Final region processing log
    if last_region:
        print(f"✅ {last_range}/{last_region}")

    # Convert to JavaScript
    js_output = "const data = " + json.dumps(output, indent=2, ensure_ascii=False)

    for key in ["abbr", "catg", "coor", "date", "name", "gallery", "scale", "zoom"]:
        js_output = re.sub(rf'"{key}"(?=\s*:)', key, js_output)
    
    return js_output

#------------------------
# @g MAIN
#------------------------
def main():

    # Print header
    print("🌍 Excel to JS converter:")

    # Process data
    data = process_data()

    # Write output file
    write_data_to_file(OUTPUT_FILE, data)

    # Print footer
    print("🏆 Conversion done!")

if __name__ == "__main__":
	main()