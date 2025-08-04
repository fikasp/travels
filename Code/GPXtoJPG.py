import os
import piexif
from Tools import select_folder
from PIL import Image


def convert_decimal_to_gps(value, ref):
    """
    Convert decimal degrees to EXIF GPS format.
    Returns: tuple of rational degrees + reference letter.
    """
    deg = int(value)
    min_ = int((value - deg) * 60)
    sec = round((value - deg - min_ / 60) * 3600 * 100)
    return ((deg, 1), (min_, 1), (sec, 100)), ref


def add_gps_to_image(image_path, lat, lon, output_path):
    """
    Adds GPS metadata to a JPEG image and saves it to a new file.
    """
    img = Image.open(image_path)
    exif_data = img.info.get('exif', b'')
    exif_dict = piexif.load(exif_data)

    # If 'GPS' IFD not present, create it
    if 'GPS' not in exif_dict:
        exif_dict['GPS'] = {}

    # Remove invalid GPSVersionID from 'Exif' IFD if exists (tag 41729)
    if 'Exif' in exif_dict and 41729 in exif_dict['Exif']:
        del exif_dict['Exif'][41729]

    # Prepare GPS coordinates in EXIF format
    lat_data, lat_ref = convert_decimal_to_gps(abs(lat), 'N' if lat >= 0 else 'S')
    lon_data, lon_ref = convert_decimal_to_gps(abs(lon), 'E' if lon >= 0 else 'W')

    exif_dict['GPS'][piexif.GPSIFD.GPSLatitudeRef] = lat_ref.encode()
    exif_dict['GPS'][piexif.GPSIFD.GPSLatitude] = lat_data
    exif_dict['GPS'][piexif.GPSIFD.GPSLongitudeRef] = lon_ref.encode()
    exif_dict['GPS'][piexif.GPSIFD.GPSLongitude] = lon_data

    # GPSVersionID must be a tuple of 4 ints, mandatory for GPS IFD
    exif_dict['GPS'][piexif.GPSIFD.GPSVersionID] = (2, 3, 0, 0)

    # Dump back the EXIF data and save image
    exif_bytes = piexif.dump(exif_dict)
    img.save(output_path, "jpeg", exif=exif_bytes)
    print(f"✅ GPS added to: {output_path}")


def process_folder(folder_path):
    # Find all .jpg files in the selected folder
    jpg_files = [f for f in os.listdir(folder_path) if f.lower().endswith('.jpg')]

    if not jpg_files:
        print("❌ No JPG files found in the selected folder.")
        return

    # Process each JPG file
    for file in jpg_files:
        print(f"\n📷 File: {file}")
        coord_input = input("   Enter GPS coordinates (lat, lon) or press Enter to skip: ").strip()

        if not coord_input:
            print("⏭️  Skipped.")
            continue

        try:
            lat_str, lon_str = coord_input.split(',')
            latitude = float(lat_str.strip())
            longitude = float(lon_str.strip())
        except ValueError:
            print("❌ Invalid format. Skipping this file.")
            continue

        input_path = os.path.join(folder_path, file)
        output_path = os.path.join(folder_path, file.replace(".jpg", "_gps.jpg"))
        add_gps_to_image(input_path, latitude, longitude, output_path)


def main():

    # Print header
    print("🌍 GPS to JPG Tagger:")

    # Select folder
    selected_folder_path = select_folder()
    if not selected_folder_path:
        return
    
    # Process folder
    process_folder(selected_folder_path)
   
    # Print footer
    print("\n🏆 Done! All photos processed.")

if __name__ == "__main__":
    main()
