import os
import xml.etree.ElementTree as ET
from Tools import select_file, save_gps_to_xlsx


def convertXmlObject(element):
    """
    Convert an XML <wpt> element to a tuple (name, coordinates).
    """
    lat = "{:.7f}".format(float(element.attrib["lat"]))
    lon = "{:.7f}".format(float(element.attrib["lon"]))
    name = element.find("name").text if element.find("name") is not None else "Unnamed"
    return name, f"{lat}, {lon}"


def process_file(file_path: str):
    """
    Process a GPX file and save its waypoints to an Excel file.
    """
    # Read file
    with open(file_path, "r", encoding="utf-8") as file:
        stringData = file.read()

    # Clean up GPX
    stringData = stringData.replace('<?xml version="1.0" encoding="UTF-8"?>', '')
    stringData = stringData.replace(
        '<gpx version="1.1" creator="GPS Visualizer Sandbox https://www.gpsvisualizer.com/draw/" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">',
        '<gpx>'
    )

    # Parse XML
    xmlElements = ET.fromstring(stringData)
    data = [convertXmlObject(el) for el in xmlElements.findall("wpt")]

    # Save
    dir_path = os.path.dirname(file_path)
    output_path = os.path.join(dir_path, "GPS.xlsx")
    save_gps_to_xlsx(data, output_path)


def main():

    # Print header
    print("🌍 GPX to XLS Converter:")

    # Select file
    selected_file_path = select_file("gpx")
    if not selected_file_path:
        return
    
    # Process file
    process_file(selected_file_path)

    # Process footer
    print(f"🏆 Success! Data saved to GPS.xlsx")

if __name__ == "__main__":
    main()
