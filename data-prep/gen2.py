
import json
text = "3/14/2024 13:55:20|Tisorn|Na Phattalung|7|https://drive.google.com/open?id=1tzJ7HWhppq4sDYvQptwqpoCpwFMp0erI|456|Physics, Mathematics|0835064821|ts_mon_nn|Mon25484911|https://www.facebook.com/tisorn.naphattalung?mibextid=opq0tG"



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
