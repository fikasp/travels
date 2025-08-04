import os
from Tools import select_folder
from PIL import Image


def get_jpg_files(input_folder_path):
    """
    Get a set of JPG filenames without extensions from the input folder.
    """
    jpg_files = {
        os.path.splitext(filename)[0]
        for filename in os.listdir(input_folder_path)
        if filename.lower().endswith(('.jpg', '.jpeg'))
    }
    return jpg_files


def get_webp_folder(input_folder_path):
    """
    Create a 'webp' subfolder inside the input folder if it doesn't exist.
    """
    webp_folder_path = os.path.join(input_folder_path, 'webp')
    if not os.path.exists(webp_folder_path):
        os.makedirs(webp_folder_path)
    return webp_folder_path


def convert_images(input_folder_path, webp_folder_path, jpg_files):
    """
    Convert JPG images to WebP format resized to 120x90 with quality 60,
    skip conversion if WebP already exists.
    """
    for base_name in sorted(jpg_files):
        filename = base_name + '.jpg'
        input_path = os.path.join(input_folder_path, filename)

        if not os.path.exists(input_path): 
            filename = base_name + '.jpeg'
            input_path = os.path.join(input_folder_path, filename)

        if not os.path.exists(input_path):
            print(f'⚠️ File not found: {base_name}.jpg/.jpeg')
            continue

        webp_filename = base_name + '.webp'
        output_path = os.path.join(webp_folder_path, webp_filename)

        if not os.path.exists(output_path):
            try:
                image = Image.open(input_path)
                new_image = image.resize((120, 90))
                new_image.save(output_path, "WEBP", quality=60)
                print(f'🟢 Converted: {filename} -> {webp_filename}')
            except Exception as e:
                print(f"Error converting {filename}: {e}")
        else:
            print(f'🟡 Skipping: {webp_filename} already exists.')


def cleanup_webp_files(webp_folder_path, jpg_files):
    """
    Remove WebP files in the 'webp' folder that do not have corresponding JPG files.
    """
    for webp_filename in os.listdir(webp_folder_path):
        if webp_filename.lower().endswith('.webp'):
            webp_name = os.path.splitext(webp_filename)[0]
            if webp_name not in jpg_files:
                webp_path = os.path.join(webp_folder_path, webp_filename)
                try:
                    os.remove(webp_path)
                    print(f'🔴 Deleted: {webp_filename} has no corresponding JPG.')
                except Exception as e:
                    print(f'Error deleting {webp_filename}: {e}')


def process_folder(folder_path):
    """
    Get JPG files, prepare webp folder, convert images, clean orphans.
    """
    print(f"🔄 Processing folder: {folder_path}")
    
    # Get JPG files in input folder
    jpg_files = get_jpg_files(folder_path)

    # Prepare webp folder
    webp_folder_path = get_webp_folder(folder_path)

    # Convert images
    convert_images(folder_path, webp_folder_path, jpg_files)

    # Cleanup orphan WebP files
    cleanup_webp_files(webp_folder_path, jpg_files)


def main():

    # Print header
    print("📷 JPG to WEBP Converter:")

    # Select folder
    selected_folder_path = select_folder()
    if not selected_folder_path:
        return  

    # Process folder
    process_folder(selected_folder_path)

    # Print footer
    print('🏆 Conversion done!')

if __name__ == "__main__":
    main()