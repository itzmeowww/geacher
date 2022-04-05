import csv
import json
import os
from PIL import Image

os.chdir("..")
path = os.getcwd()

ext = {}
path = os.path.join(path, 'public', 'posters')
for name in os.listdir(path):
    ext[name.split(".")[0]] = name.split(".")[1]
    print(name.split("."))
os.chdir("data-prep")

file = open('data.csv')

csvreader = csv.reader(file)
header = []
header = next(csvreader)
rows = []
cou = 0
skip = -1
for row in csvreader:
    cou = cou+1
    if cou > skip:
        rows.append(row)
file.close()

data = []
for row in rows:
    uid = str(row[3]) + "m" + str(row[5])
    data.append(

        {
            'firstname': row[1],
            'lastname': row[2],
            'batch': int(row[3]),
            'poster': 'https://raw.githubusercontent.com/itzmeowww/geacher/main/public/resized_posters/'+uid + '.' + ext[uid],
            'thumbnail_poster': 'https://raw.githubusercontent.com/itzmeowww/geacher/main/public/preview_posters/'+uid + '.' + ext[uid],
            'id': uid,
            'subjects': row[6].split(', '),
            'tel': row[7],
            'ig': 'https://instagram.com/' + row[8],
            'line': row[9],
            'fb': row[10],
            'active': True
        }

    )

json_string = json.dumps(data)

with open('json_data.json', 'w') as outfile:
    outfile.write(json_string)
