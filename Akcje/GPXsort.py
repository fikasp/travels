import os
import glob
import xml.etree.ElementTree as ET

def main():
    # print header
    print("GPXsort 1.0.0")

    # path to application directory
    path = os.path.dirname(os.path.abspath(__file__))

    # find gpx files
    gpxFiles = glob.glob(path + '/*.gpx')

    # check if gpx files exist
    if len(gpxFiles) > 0:
        filePath = gpxFiles[0]
    else:
        print("Files not found....")
        return

    # get the absolute path to the GPX file
    gpx_file_path = os.path.join(path, gpxFiles[0])

    # load the XML file
    tree = ET.parse(gpx_file_path)
    root = tree.getroot()

    # remove namespace from all elements
    for elem in root.iter():
        if '}' in elem.tag:
            elem.tag = elem.tag.split('}', 1)[1]

    # find all waypoints
    waypoints = root.findall('.//wpt')

    # sort waypoints by name
    waypoints.sort(key=lambda wpt: wpt.find('name').text)

    # create a copy of sorted waypoints
    sorted_waypoints = waypoints.copy()

    # remove existing waypoints from the root
    for waypoint in waypoints:
        root.remove(waypoint)

    # add sorted waypoints back to the root
    for waypoint in sorted_waypoints:
        root.append(waypoint)

    # save the modified XML to a new file
    tree.write(os.path.join(path, gpxFiles[0]), encoding='utf-8', xml_declaration=True)

    print("Sorting successful...")

main()