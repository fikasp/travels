import xml.etree.ElementTree as ET
from Tools import set_polish_locale
from Tools import select_file
import locale


def process_file(file_path: str):
    """
    Sorts <wpt> elements in the GPX file alphabetically by <name>.
    """
    print(f"🔄 Processing file: {file_path}")
    
    # Load the XML
    tree = ET.parse(file_path)
    root = tree.getroot()

    # Remove XML namespaces, if present
    for elem in root.iter():
        if '}' in elem.tag:
            elem.tag = elem.tag.split('}', 1)[1]

    # Extract all <wpt> elements
    waypoints = root.findall('.//wpt')

    # Sort waypoints by <name>, locale-aware
    waypoints.sort(key=lambda wpt: locale.strxfrm(wpt.find('name').text or ""))

    # Remove existing waypoints
    for wpt in waypoints:
        root.remove(wpt)

    # Re-add sorted waypoints
    for wpt in waypoints:
        root.append(wpt)

    # Save back to the original file
    tree.write(file_path, encoding='utf-8', xml_declaration=True)


def main():

    # Print header
    print("🌍 GPXsort:")

    # Set Polish locale
    set_polish_locale()

    # Select file
    selected_file_path = select_file("gpx")
    if not selected_file_path:
        return
    
    # Process file
    process_file(selected_file_path)

    # Print footer
    print("🏆 Sorting done!")

if __name__ == "__main__":
    main()