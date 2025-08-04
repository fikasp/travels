import os
import exifread
import locale
from Tools import select_folder
from Tools import save_gps_to_xlsx
from Tools import set_polish_locale


def convert_gps_to_decimal(value):
    """
    Converts EXIF GPS coordinates into float degrees.
    """
    try:
        d, m, s = [float(v.num) / float(v.den) for v in value.values]
        return d + (m / 60.0) + (s / 3600.0)
    except Exception:
        return None


def get_gps_coordinates(file_path):
    """
    Extracts GPS coordinates from a JPEG using exifread.
    """
    with open(file_path, 'rb') as f:
        tags = exifread.process_file(f, details=False)

        try:
            lat_ref = tags["GPS GPSLatitudeRef"].values
            lat = convert_gps_to_decimal(tags["GPS GPSLatitude"])
            lon_ref = tags["GPS GPSLongitudeRef"].values
            lon = convert_gps_to_decimal(tags["GPS GPSLongitude"])

            if lat is None or lon is None:
                return "no GPS data"

            if lat_ref != 'N':
                lat = -lat
            if lon_ref != 'E':
                lon = -lon

            return f"{lat:.7f}, {lon:.7f}"
        except KeyError:
            return "no GPS data"
        except Exception as e:
            return f"error: {str(e)}"


def process_folder(folder_path):
    """
    Processes all JPG images in the folder and returns list of tuples: (filename, coordinates),
    sorted alphabetically using Polish locale.
    """
    print(f"🔄 Processing folder: {folder_path}")
    data = []

    for filename in os.listdir(folder_path):
        if filename.lower().endswith(".jpg"):
            file_path = os.path.join(folder_path, filename)
            coords = get_gps_coordinates(file_path)
            name_without_ext = os.path.splitext(filename)[0]
            data.append((name_without_ext, coords))

    # Sort using locale-aware transformation
    data.sort(key=lambda x: locale.strxfrm(x[0]))

    output_path = os.path.join(folder_path, "GPS.xlsx")
    save_gps_to_xlsx(data, output_path)


def main():

    # Print header
    print("🌍 JPG to XLS Converter:")

    # Set Polish locale
    set_polish_locale()

    # Select folder
    selected_folder_path = select_folder()
    if not selected_folder_path:
        return
    
    # Process folder
    process_folder(selected_folder_path)

    # Print footer
    print("🏆 Success! Data saved to GPS.xlsx")

if __name__ == "__main__":
    main()