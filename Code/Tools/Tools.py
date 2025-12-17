import locale
import subprocess
import tkinter as tk
from tkinter import filedialog
from openpyxl import Workbook


# @b Save GPS to XLSX
#------------------------
def save_gps_to_xlsx(data: list[tuple], filepath: str, headers: list[str] = ["Name", "Coordinates"]):
    """
    Save a list of tuples to an XLSX file.
    :param data: List of rows (each row is a tuple of values)
    :param filepath: Output path for the XLSX file
    """
    wb = Workbook()
    ws = wb.active
    ws.append(headers)
    for row in data:
        ws.append(row)
    wb.save(filepath)


# @b Select file
#------------------------
def select_file(ext: str = "*") -> str | None:
    """
    Open a file dialog to select a file by extension.
    """
    root = tk.Tk()
    root.withdraw()

    ext = ext.strip().lower().lstrip(".")

    if ext == "*" or ext == "":
        filetypes = [("All files", "*.*")]
        title = "Select a file"
    else:
        filetypes = [(f"{ext.upper()} files", f"*.{ext}")]
        title = f"Select a {ext.upper()} file"

    file_path = filedialog.askopenfilename(title=title, filetypes=filetypes)
    if not file_path:
        print("⚠️  No file selected!")
        return None
    return file_path


# @b Select folder
#------------------------
def select_folder() -> str | None:
    """
    Open a dialog to select a folder.
    """
    root = tk.Tk()
    root.withdraw()
    title = "Select folder"
    folder_path = filedialog.askdirectory(title=title)
    if not folder_path:
        print("⚠️  No folder selected!")
        return None
    return folder_path


# @b Set file hidden
#------------------------
def set_file_hidden(file_path):
    """
    Set the Windows file hidden attribute using 'attrib +H'.
    """
    try:
        subprocess.run(['attrib', '+H', str(file_path)], check=True, shell=True)
    except Exception as e:
        print(f"⚠️ Couldn't hide file: {e}")


# @b Set file unhidden
#------------------------
def set_file_unhidden(file_path):
    """
    Remove the Windows file hidden attribute using 'attrib -H'.
    """
    try:
        subprocess.run(['attrib', '-H', str(file_path)], check=True, shell=True)
    except Exception as e:
        print(f"⚠️ Couldn't unhide file: {e}")


# @b Set Polish locale
#------------------------
def set_polish_locale():
    """
    Set the Polish locale for string collation.
    """
    try:
        locale.setlocale(locale.LC_COLLATE, 'pl_PL.UTF-8')
    except locale.Error:
        print("⚠️  Polish locale not available on this system.")


# @b Write data to file
#------------------------
def write_data_to_file(file_path, content, encoding="utf-8"):
    """
    Write text content to a file using the specified encoding.
    """
    try:
        with open(file_path, "w", encoding=encoding) as f:
            f.write(content)
    except Exception as e:
        print(f"⚠️  Couldn't write to file {file_path}: {e}")