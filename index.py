import re
import json
import pandas as pd
from Code.Tools import set_file_hidden
from Code.Tools import set_file_unhidden
from Code.Tools import write_data_to_file

#------------------------
# @g CONFIG
#------------------------
sheet_name = 'Zestawienie'
input_path = 'Travels.xlsx'
output_path = "index.js"

#------------------------
# @g FUNCTIONS
#------------------------
def process_data():
    """
    Processes Excel data and returns it as a formatted JavaScript string.
    """
    # Load Excel file
    try:
        df = pd.read_excel(input_path, sheet_name=sheet_name, dtype=str)
    except Exception as e:
        print(f"❌ Error reading Excel file: {e}")
        return

    # Initialize data structure
    output = {
        "ŚWIAT": {}, 
        "POLSKA": {}, 
        "DROGI": {},
        "GÓRY": {}, 
        }

    # Track the last processed range and region
    last_region = None
    last_range = None

    for _, row in df.iterrows():
        range_raw, region, city, abbr, zoom, scale, coors, date, category, description, top = row

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
            if top == "Tak":
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

    # Unhide output file
    set_file_unhidden(output_path) 

    # Write output file
    write_data_to_file(output_path, data)

    # Set file as hidden
    set_file_hidden(output_path) 

    # Print footer
    print("🏆 Conversion done!")

if __name__ == "__main__":
	main()