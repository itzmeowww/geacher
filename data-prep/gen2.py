
import json
text = "5/9/2022 14:47:15|Suphawit |Promkhot|5|https://drive.google.com/open?id=1epQqjFq37V78tLThctcVgUvOzI8UcUnT|344|Mathematics, English|0636254626|mac._.ma_c|suphawitmac|https://www.facebook.com/profile.php?id=100010924725986"
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
