import os
from encodings import utf_8

city = "Częstochowa"
voivodeship = "Śląskie"
path_photos = f"b:/Biblioteka/Geografia/Polska/{voivodeship}/{city}/Zdjęcia/"
path_index = f"b:/Biblioteka/Geografia/Polska/{voivodeship}/{city}/Zdjęcia/Zdjęcia.txt"

photos = os.listdir(path_photos)
photos.sort()

index = open(path_index, "w", encoding="utf8")

for photo in photos:
    photo = photo.replace(".jpg","")
    index.write(photo + "\n")
    print(photo)


