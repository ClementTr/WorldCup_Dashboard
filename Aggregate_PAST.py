import time
from pymongo import MongoClient
import pandas as pd
import datetime

global hashtag, joueurs, db
# hashtag = str('#PORSPA')[1:]
with open('HASHTAG_FILE.txt') as f:
    hashtag = f.read()[1:7]

client = MongoClient('localhost', 27017)
db = client['WorldCup']
collection_Tweets = db[hashtag+'_Tweets']
collection_Sentiments_Agg = db[hashtag+'_Sentiments_Agg']
now = datetime.datetime.now()
test = False

cursor = collection_Tweets.find()
df =  pd.DataFrame(list(cursor))
df['date'] = pd.to_datetime(df['created_at'],  infer_datetime_format=True)
df.drop_duplicates('date',inplace=True)
print(df.count())
print(df['date'].min())
print(df['date'].max())

debut= df['date'].min()
fin = df['date'].max()

from pandas import Int64Index
# print('TEST')
# print(1 in Int64Index([1, 0], dtype='int64'))
print(debut<fin)
while debut<fin:
    tmp = debut + datetime.timedelta(minutes=5)
    df_temp = df.loc[(df['date'] > debut) & (df['date'] < tmp)]
    debut = tmp
    if 1 in df_temp['positivity'].value_counts().index:
        pos_count = df_temp['positivity'].value_counts()[1]
    else:
        pos_count =0
    if 0 in df_temp['positivity'].value_counts().index:
        neut_count = df_temp['positivity'].value_counts()[0]
    else:
        neut_count =0
    if -1 in df_temp['positivity'].value_counts().index:
        neg_count = df_temp['positivity'].value_counts()[-1]
    else:
        neg_count =0

    to_insert = {'Time':str(tmp),#+datetime.timedelta(minutes=+120)),
            'Positive':str(pos_count),
            'Neutral':str(neut_count),
            'Negative':str(neg_count)}
    collection_Sentiments_Agg.insert_one(to_insert)

# df_temp = df.loc[(df['date'] > datetime.datetime.now() + datetime.timedelta(minutes=-125)) & (df['date'] < datetime.datetime.now() + datetime.timedelta(minutes=-120))]
# collection_Sentiments_Agg.update_one({"Time":now, "Positive":df_temp['positivity'].value_counts()[1],"Neutral":df_temp['positivity'].value_counts()[0], "Negative":df_temp['positivity'].value_counts()[-1]}, upsert=True)
# time.seep(300)
