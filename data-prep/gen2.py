
import json
text = "3/29/2022 14:22:27|Puttipol|Penchan|5|https://drive.google.com/open?id=19TS4eR_2-_vagN6o1Nt1YpVT3bXOsQly|331|Physics, Chemistry, Mathematics, Astronomy; Japanese; EJU|0849981928|ppp.pp48|0849981928|https://www.facebook.com/ota.pp48/"
row = text.split("|")
data = []

uid = str(row[3]) + "m" + str(row[5])
data.append(

    {
        'firstname': row[1],
        'lastname': row[2],
        'batch': int(row[3]),
        'poster': 'https://raw.githubusercontent.com/itzmeowww/geacher/main/public/resized_posters/'+str(row[3]) + "m" + str(row[5]),
        "thumbnail_poster": "https://raw.githubusercontent.com/itzmeowww/geacher/main/public/preview_posters/"+str(row[3]) + "m" + str(row[5]),
        'id': str(row[3]) + "m" + str(row[5]),
        'subjects': row[6].split(', '),
        'tel': row[7],
        'ig': 'https://instagram.com/' + row[8],
        'line': row[9],
        'fb': row[10],
        "active": True
    }

)

json_string = json.dumps(data)

with open('json_data.json', 'w') as outfile:
    outfile.write(json_string)
