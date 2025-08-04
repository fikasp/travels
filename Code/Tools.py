import locale
import tkinter as tk
from tkinter import filedialog
from openpyxl import Workbook


def select_folder(title="Select folder") -> str | None:
    """
    Open a dialog to select a folder.
    """
    root = tk.Tk()
    root.withdraw()
    folder_path = filedialog.askdirectory(title=title)
    if not folder_path:
        print("⚠️  No folder selected!")
        return None
    return folder_path


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


def set_polish_locale():
    """
    Set the Polish locale for string collation.
    """
    try:
        locale.setlocale(locale.LC_COLLATE, 'pl_PL.UTF-8')
    except locale.Error:
        print("⚠️  Polish locale not available on this system.")


def save_gps_to_xlsx(data: list[tuple], filepath: str):
    """
    Save a list of tuples to an XLSX file.
    :param data: List of rows (each row is a tuple of values)
    :param filepath: Output path for the XLSX file
    """
    headers = ["Name", "Coordinates"] 

    wb = Workbook()
    ws = wb.active
    ws.append(headers)
    for row in data:
        ws.append(row)
    wb.save(filepath)
