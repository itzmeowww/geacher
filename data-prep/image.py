import os
from PIL import Image
os.chdir("..")
path = os.getcwd()

path = os.path.join(path, 'public', 'posters')
for name in os.listdir(path):
    img = os.path.join(os.path.abspath(
        os.path.join('public', 'posters', name)))

    im = Image.open(img)
    im.thumbnail((400, 400), Image.ANTIALIAS)
    im.save(os.path.join('public', 'preview_posters', name), im.format)

    # print(type(im.size))
# # (400, 225)
# # <class 'tuple'>

# w, h = im.size
# print('width: ', w)
# print('height:', h)
