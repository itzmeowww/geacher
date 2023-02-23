
import json
text = "2/23/2023 19:22:35|Parncheewa|Toommakorn|6|https://drive.google.com/open?id=1C8Eg1X8WIKgQSSUNpvIjx2Zqk-R9Kg5S|396|Physics, Chemistry, Biology, Mathematics, English, IYPT|0954950724|studygram.jel|0954950724|https://www.facebook.com/profile.php?id=100015603336134&mibextid=LQQJ4d"


# 2/23/2023 20:04:28|Passapan|Sanguanchua|6|https://drive.google.com/open?id=1LKZUBYBd1WAayofC9uVStHkPC75rS8LY|403|Physics, Mathematics, English|0951030440|pete_passapanja|petepassapan|
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
