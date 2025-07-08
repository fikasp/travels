import xml.etree.ElementTree as ET
import glob
import os
from openpyxl import Workbook

def convertXmlObject(element):  
    """
    Convert XML element to a tuple (name, coordinates).
    """
    lat = "{:.7f}".format(float(element.attrib["lat"]))
    lon = "{:.7f}".format(float(element.attrib["lon"]))
    name = element.find("name").text if element.find("name") is not None else "Unnamed"
    return name, f"{lat}, {lon}"

def main():
    """ Main function of the GPX to Excel Converter script. """
    print("🌍 GPXtoExcel Converter:")
    
    path = os.path.dirname(os.path.abspath(__file__))
    gpxFiles = glob.glob(path + '/*.gpx')
    
    if not gpxFiles:
        print("🟡 Files not found!")
        return
    
    filePath = gpxFiles[0]
    fileName = os.path.splitext(os.path.basename(filePath))[0]
    
    with open(filePath, "r", encoding="utf-8") as file:
        stringData = file.read()
    
    stringData = stringData.replace('<?xml version="1.0" encoding="UTF-8"?>', '')
    stringData = stringData.replace('<gpx version="1.1" creator="GPS Visualizer Sandbox https://www.gpsvisualizer.com/draw/" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">', '<gpx>')
    
    xmlElements = ET.fromstring(stringData)
    
    wb = Workbook()
    ws = wb.active
    ws.title = "GPX Data"
    ws.append(["Nazwa", "Współrzędne (Lat, Lon)"])
    
    for element in xmlElements.findall("wpt"):
        ws.append(convertXmlObject(element))
    
    outputFilePath = os.path.join(path, f"{fileName}.xlsx")
    wb.save(outputFilePath)
    
    print("🏆 Conversion done!")

main()
