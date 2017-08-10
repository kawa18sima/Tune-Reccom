import MySQLdb
import calc_similarity
import glob
import numpy as np
import sys

args = sys.argv

index = int(args[1])

sql = "SELECT * FROM tests"
connector = MySQLdb.connect(user="root",passwd="",db="tune-reccom",charset="utf8")
cursor = connector.cursor()
cursor.execute(sql)
result = cursor.fetchall()
num = []
for l in result:
  l = str(l).split()
  data = []
  for i in  range(40):
    l[i+1] = float(l[i+1].split(',')[0].split(')')[0].split("'")[1])
    data.append(l[i+1])
    if(i == 39):
      num.append(data)
cursor.close()
connector.close()

result = calc_similarity.distance(np.array(num),index)

f = open('search.txt', 'w')

num = len(result) -1
for n in range(num):
  if(n != 0):
    idx = n + 1
    music_idx = sorted( [(v,i) for (i,v) in enumerate(result)] )[-idx][1] #音楽添字
    f.write(str(music_idx) + "\n")
