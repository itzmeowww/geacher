import os
from PIL import Image
os.chdir("..")
path = os.getcwd()

path = os.path.join(path, 'public', 'posters')

target_file = "6m403.jpg"

for name in os.listdir(path):
    if target_file == None or target_file == name:
        img = os.path.join(os.path.abspath(
            os.path.join('public', 'posters', name)))

        im = Image.open(img)
        im.thumbnail((800, 800), Image.ANTIALIAS)
        im.save(os.path.join('public', 'preview_posters', name), im.format)


path = os.getcwd()
path = os.path.join(path, 'public', 'posters')
for name in os.listdir(path):
    if target_file == None or target_file == name:
        img = os.path.join(os.path.abspath(
            os.path.join('public', 'posters', name)))

        im = Image.open(img)
        im.thumbnail((1080, 1080), Image.ANTIALIAS)
        im.save(os.path.join('public', 'resized_posters', name), im.format)

    # print(type(im.size))
# # (400, 225)
# # <class 'tuple'>

# w, h = im.size
# print('width: ', w)
# print('height:', h)
