import sys
import os
import json
import tekddlparser as libc

# print("-->>>>>>>>",sys.argv[1])
os.environ["LD_LIBRARY_PATH"] = os.getcwd()
filepath = filepath = os.getcwd() + "/public/uploads/" + sys.argv[1]

try:
    file = open(filepath, "rb")
    out = libc.parse(file)
    json_out = json.dumps(out)
    print(json_out)
except:
    error = { "message":"There is some issue with parsing your file" }
    print(json.dumps(error))

