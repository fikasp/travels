"""
GPX to JS Converter

Version: 1.0.0
Date: 2023-05-17
Author: ARWcode

This script converts GPX data to JavaScript objects.
"""

import xml.etree.ElementTree as ET
import glob
import os


def convertXmlObject(element, category):  
    """
    Convert XML element to JavaScript object.
    Args:
        element (Element): XML element containing data.
        category (str): Category of the object.
    Returns:
        str: JavaScript object representation of the XML element.
    """
    # get info from xml element
    lat = "{:.7f}".format(float(element.attrib["lat"])) #latitude
    lon = "{:.7f}".format(float(element.attrib["lon"])) #longitude
    name = element.find("name").text #name

    # prepare java script object
    jsObj = f"{{coor: [{lat}, {lon}], catg: cat.{category}, name: '{name}'}},"  
    return jsObj


def main():
    """ 
    Main function of the GPX to JS Converter script.
    """
    # print header
    print("GPXtoJS Converter 1.0.0")

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

    # extracting filename from the entire path

    fileName = os.path.splitext(os.path.basename(filePath))[0].lower()

    # read gpx file as string
    with open(filePath, "r", encoding="utf-8") as file:
        stringData = file.read()    
    
    # remove gpx header
    stringData = stringData.replace('<?xml version="1.0" encoding="UTF-8"?>', '')
    stringData = stringData.replace('<gpx version="1.1" creator="GPS Visualizer Sandbox https://www.gpsvisualizer.com/draw/" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">', '<gpx>')

    # convert string to xml data
    xmlElements = ET.fromstring(stringData)
  
    # create a list to store JavaScript objects
    jsObjects = []

    # loop for xml data convertion and print
    for element in xmlElements.findall("wpt"):
        jsObj = convertXmlObject(element, fileName)
        jsObjects.append(jsObj)
        print(jsObj)

    # create JavaScript code by joining all objects
    jsCode = "\n".join(jsObjects)

    # write JavaScript code to a file
    outputFilePath = os.path.join(path, f"{fileName}.js")
    with open(outputFilePath, "w", encoding="utf-8") as outputFile:
        outputFile.write(jsCode)
    
    # print footer
    print("Convertion successful...")

main()
