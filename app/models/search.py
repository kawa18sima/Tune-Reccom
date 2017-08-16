import MySQLdb
import calc_similarity
import glob
import numpy as np
import sys

args = sys.argv

index = int(args[1])

sql = "SELECT * FROM feature_vectors"
connector = MySQLdb.connect(user="root",passwd="",db="tune_reccom_development",charset="utf8")
cursor = connector.cursor()
cursor.execute(sql)
result = cursor.fetchall()
num = []
for l in result:
  l = str(l).split()
  data = []
  for i in  range(50):
    if(i==0 or i == 41):
      continue
    l[i] = float(l[i].split(',')[0].split(')')[0].split("'")[1])
    data.append(l[i])
    if(i == 49):
      num.append(data)
cursor.close()
connector.close()


result = calc_similarity.distance(np.array(num),index)

f = open('search.txt', 'w')

print(5)

# num = len(result)
num = 10
for n in range(num):
  if(n == 0):
    continue
  idx = n + 1
  music_idx = sorted( [(v,i) for (i,v) in enumerate(result)] )[-idx][1] #音楽添字
  f.write(str(music_idx) + "\n")
