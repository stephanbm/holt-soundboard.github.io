import os
import glob
from pathlib import Path
from pprint import pprint

p = Path("/Users/parthkabra/Desktop/Web/HOLT_SOUNDBOARD_5/holt-soundboard-pro/src/assets/sounds")
sounds = {}


for i in p.glob('**/*.mp3'):
  sound_path = str(i).split("sounds/")[1]
  # print(sound_path)

  # make sure not system file
  if not (sound_path[0] == "."):
    character, filename = sound_path.split('/')[0], sound_path.split('/')[1]

    try: sounds[character].append(filename)
    except: sounds[character] = [filename]

for char, list in sounds.items():
  sounds[char].sort()

# print(sounds)

for char, s in sounds.items():
  for each_sound in s:
    print(f'"https://raw.githubusercontent.com/holt-soundboard/holt-soundboard.github.io/master/assets/sounds/{char}/{each_sound}",')