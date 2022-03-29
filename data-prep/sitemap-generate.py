import json
import os
import datetime

now = datetime.datetime.now().isoformat()


os.chdir("..")

path = os.getcwd()
path = os.path.join(path, 'data', 'tutors.json')
uid = []
with open(path, 'r') as file:
    data = json.load(file)
    for x in data:
        uid.append(x['id'])


path = os.getcwd()
path = os.path.join(path, 'public', 'sitemap.xml')

with open(path, 'w') as file:
    file.write('<?xml version="1.0" encoding="UTF-8"?>\n')
    file.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')

    file.write('\t<url>\n')
    file.write('\t\t<loc>https://geacher.vercel.app/</loc>\n')
    file.write('\t\t<lastmod>' + now + '</lastmod>\n')
    file.write('\t\t<priority>1</priority>\n')
    file.write('\t</url>\n')

    file.write('\t<url>\n')
    file.write('\t\t<loc>https://geacher.vercel.app/search/</loc>\n')
    file.write('\t\t<lastmod>' + now + '</lastmod>\n')
    file.write('\t\t<priority>0.9</priority>\n')
    file.write('\t</url>\n')

    for x in uid:
        file.write('\t<url>\n')
        file.write('\t\t<loc>https://geacher.vercel.app/u/' + x + '</loc>\n')
        file.write('\t\t<lastmod>' + now + '</lastmod>\n')
        file.write('\t\t<priority>0.8</priority>\n')
        file.write('\t</url>\n')
    file.write('</urlset >')
