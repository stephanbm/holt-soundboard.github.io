import os
import glob
from pathlib import Path
from pprint import pprint

PATH = "/Users/parthkabra/Desktop/Web/Holt_soundboard 4/sounds"

dic = {}

p = Path(PATH)
for i in p.glob('**/*.*'):
    sound_path = str(i).split("sounds/")[1]
    if not sound_path[0] == ".":
        print(sound_path)
        character, filename = sound_path.split("/")[0], sound_path.split("/")[1].capitalize()

        try:
            dic[character].append(filename)
        except:
            dic[character] = [filename]


pprint(dic)

for key, lst in dic.items():
    dic[key].sort()
    pprint(dic[key])

f = open("js/data.js", "w")
f.write("let data = " + str(dic))
f.close()
