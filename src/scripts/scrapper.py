import urllib.request
import os
import re
import json
from pprint import pprint

URL = "ftp://aftp.cmdl.noaa.gov/products/trends/co2/co2_weekly_mlo.txt"

data = urllib.request.urlopen(URL)

data_to_write = data.readlines()[-1]
data_to_write = data_to_write.decode("utf-8")

data_file = os.path.abspath(os.path.realpath('./static/data.json'))

def updateFileData():
  with open(data_file,'r+') as f :
    incoming_file_data = re.findall(r"[-+]?\d*\.\d+|\d+", data_to_write)
    file_content = json.load(f)

    if file_content['data'] :
      last_file_data = file_content['data'][-1]
      if incoming_file_data[0] == last_file_data['year'] and incoming_file_data[1] == last_file_data['month'] and incoming_file_data[2] == last_file_data['day'] and incoming_file_data[4] == last_file_data['ppm'] :
        return False

    data_dict = {}
    data_dict['data'] = []
    file_content['data'].append({
      'year': incoming_file_data[0],
      'month': incoming_file_data[1],
      'day': incoming_file_data[2],
      'ppm': incoming_file_data[4]
    })
    f.seek(0)
    f.write(json.dumps(file_content, sort_keys=False, indent=2))

updateFileData()
