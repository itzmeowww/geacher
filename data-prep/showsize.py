import os
from PIL import Image
os.chdir("..")
path = os.getcwd()

folder = 'posters'
path = os.path.join(path, 'public', folder)
for name in os.listdir(path):
    img = os.path.join(os.path.abspath(
        os.path.join('public', folder, name)))

    im = Image.open(img)
    print(im.size)
# # (400, 225)
# # <class 'tuple'>

# w, h = im.size
# print('width: ', w)
# print('height:', h)
