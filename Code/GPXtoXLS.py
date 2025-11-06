import os
import xml.etree.ElementTree as ET
from Tools import save_gps_to_xlsx
from Tools import select_file

#------------------------
# @g CONFIG
#------------------------

# GPX namespace URI
GPX_NAMESPACE = "{http://www.topografix.com/GPX/1/1}"

# Tag definitions for namespaced elements
WPT_TAG_NS = f"{GPX_NAMESPACE}wpt" 
NAME_TAG_NS = f"{GPX_NAMESPACE}name"

# Tag definitions for non-namespaced element
WPT_TAG_NO_NS = "wpt"
NAME_TAG_NO_NS = "name"

#------------------------
# @g FUNCTIONS
#------------------------

# @b Parse gpx waypoint
#------------------------
def parse_gpx_waypoint(element):
    """
    Parse an XML <wpt> element to a tuple (coordinates, empty, category, description).
    Dynamically handles namespaces and processes the name to extract the category.
    The description text is returned AS IS, without any case formatting.
    """
    # 1. Determine which tag to use for 'name' based on the 'wpt' element's tag
    if GPX_NAMESPACE in element.tag:
        name_tag = NAME_TAG_NS  # Use namespaced tag
    else:
        name_tag = NAME_TAG_NO_NS  # Use simple tag

    name_element = element.find(name_tag)
    raw_name = name_element.text if name_element is not None else "Unnamed"

    # 2. Clean the name: remove '!' and leading/trailing whitespace
    # Note: 'cleaned_name' still contains the category prefix, e.g., "H: Sukiennice"
    cleaned_name = raw_name.replace('!', '').strip()
    
    # 3. Determine Category and Description (Logic remains for Excel output)
    category = "O"  # Default category 'O' (Observation/Other)
    description = cleaned_name
    
    # Check for the category pattern: <LETTER>:<TEXT>
    if len(cleaned_name) >= 2 and cleaned_name[1] == ':' and cleaned_name[0].isalpha():
        category = cleaned_name[0].upper() # Extract category letter
        
        # Description is the rest of the string, stripped of leading spaces after the colon
        description = cleaned_name[2:].lstrip()

    # 4. Format Coordinates
    # Attributes (like lat/lon) are generally not affected by namespaces
    lat = "{:.7f}".format(float(element.attrib["lat"]))
    lon = "{:.7f}".format(float(element.attrib["lon"]))
    coordinates = f"{lat}, {lon}"
    
    # 5. Print and Return
    # Zmieniony komunikat zgodnie z Twoim życzeniem:
    print(f"✔️  {coordinates} -> {cleaned_name}")
    
    # Required output columns: 1: coordinates, 2: empty, 3: category, 4: description
    return coordinates, "", category, description


# @b Process file
#------------------------
def process_file(file_path: str):
    """
    Process a GPX file and save its waypoints to an Excel file.
    It handles both standard (namespaced) and simplified (non-namespaced) GPX files.
    """
    print(f"🔄 Processing file: {file_path}")
    
    try:
        # Use ET.parse() for standard XML parsing
        tree = ET.parse(file_path)
        root = tree.getroot()
    except ET.ParseError as e:
        print(f"❌ XML parsing error: {e}")
        # Return False to indicate failure
        return False 

    # 1. Try to find <wpt> elements using the standard GPX namespace
    xmlElements = root.findall(WPT_TAG_NS)

    # 2. If no waypoints were found, try to find them without the namespace
    # (Fallback for simplified/non-standard GPX files)
    if not xmlElements:
        xmlElements = root.findall(WPT_TAG_NO_NS)
        
    if not xmlElements:
        print("⚠️ Error: No <wpt> elements found in the file.")
        # Return False to indicate failure
        return False 

    # 3. Parse all found waypoint elements (using the new 4-element structure)
    data = [parse_gpx_waypoint(el) for el in xmlElements]

    # 4. Save data to Excel
    dir_path = os.path.dirname(file_path)
    output_path = os.path.join(dir_path, "GPS.xlsx")
    save_gps_to_xlsx(data, output_path, ["Coordinates", "Date", "Category", "Name"])
    
    # Return True to indicate success
    return True


#------------------------
# @g MAIN
#------------------------
def main():

    # Print header
    print("🌍 GPX to XLS Converter:")

    # Select file
    selected_file_path = select_file("gpx")
    if not selected_file_path:
        # User cancelled file selection
        print("Operation cancelled by user.")
        return
    
    # Process file and check the result
    success = process_file(selected_file_path)

    # Process footer
    if success:
        print(f"🏆 Success! Data saved to GPS.xlsx")
    else:
         print(f"❌ Processing failed. Check the error messages above.")

if __name__ == "__main__":
    main()