import os
import win32com.client
from win32com.client import Dispatch
from tkinter import Tk, filedialog
# pip install pywin32

#------------------------
# @g FUNCTIONS
#------------------------

# @b Select dwg file
#------------------------
def select_dwg_file():
    Tk().withdraw()
    return filedialog.askopenfilename(
        title="Select DWG file",
        filetypes=[("DWG files", "*.dwg")]
    )

# @b Update image references
#------------------------
def update_image_references(dwg_path):
    try:
        print("🔄 Starting AutoCAD...")
        # acad = win32com.client.Dispatch("AutoCAD.Application.17")
        acad = Dispatch("AutoCAD.Application")
        acad.Visible = True

        dwg_name = os.path.splitext(os.path.basename(dwg_path))[0]  
        print(f"📂 Opening file: {dwg_name}.dwg")

        doc = acad.Documents.Open(dwg_path)
        ms = doc.ModelSpace

        for obj in ms:
            if obj.ObjectName == "AcDbRasterImage":
                old_path = obj.ImageFile
                new_path = ""

                if old_path.lower() == "myślenice.jpg":
                    new_path = f"{dwg_name}.jpg"
                    obj.ImageFile = new_path
                elif old_path.lower() == "myślenice.gif":
                    new_path = f"{dwg_name}.gif"
                    obj.ImageFile = new_path
                print(f"✅ Updated {old_path} -> {new_path}")

        doc.Save()
        # doc.Close()
        print("🏆 Done!")

    except Exception as e:
        print("❌ Error:", str(e))

#------------------------
# @g MAIN
#------------------------

def main():
    dwg_file = select_dwg_file()
    if dwg_file:
        update_image_references(dwg_file)
    else:
        print("⚠️  No folder selected!")

if __name__ == "__main__":
    main()
