import time
from pymongo import MongoClient
import pandas as pd
import datetime

global hashtag, joueurs, db
hashtag = str('#PORALG')[1:]

client = MongoClient('localhost', 27017)
db = client['test']
collection_Tweets = db[hashtag+'_Tweets']
collection_Sentiments_Agg = db[hashtag+'_Sentiments_Agg']
now = datetime.datetime.now()
test = True

while test == True:
    cursor = collection_Tweets.find()
    df =  pd.DataFrame(list(cursor))
    df['date'] = pd.to_datetime(df['created_at'],  infer_datetime_format=True)
    df_temp = df.loc[(df['date'] > datetime.datetime.now() + datetime.timedelta(minutes=-125)) & (df['date'] < datetime.datetime.now() + datetime.timedelta(minutes=-120))]
    collection_Sentiments_Agg.update_one({"Time":now, "Positive":df_temp['positivity'].value_counts()[1],"Neutral":df_temp['positivity'].value_counts()[0], "Negative":df_temp['positivity'].value_counts()[-1]}, upsert=True)
    time.seep(300)
