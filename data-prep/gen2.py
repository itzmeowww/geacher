
import json
text = "3/15/2022 12:52:03|Parthorn|Ammawat|5|https://drive.google.com/open?id=1sWffwBmi-gZ1eFxCrq-6xfDULAw_7xIg|333|Physics, Mathematics, English|0892442272|parthorn_boon|parthornboon|https://www.facebook.com/profile.php?id=100014497842786"
row = text.split("|")
data = []

data.append(

    {
        'firstname': row[1],
        'lastname': row[2],
        'batch': int(row[3]),
        'poster': 'https://raw.githubusercontent.com/itzmeowww/geacher/main/public/posters/'+str(row[3]) + "m" + str(row[5]),
        'id': str(row[3]) + "m" + str(row[5]),
        'subjects': row[6].split(', '),
        'tel': row[7],
        'ig': 'https://instagram.com/' + row[8],
        'line': row[9],
        'fb': row[10]
    }

)

json_string = json.dumps(data)

with open('json_data.json', 'w') as outfile:
    outfile.write(json_string)
