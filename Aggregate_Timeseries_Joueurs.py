import time
from pymongo import MongoClient
import pandas as pd
import datetime
import numpy as np

PAYS_EN = {"Australia": 'AUS', "Belgium": 'BEL', "Brazil": 'BRA',
                        "Colombia": 'COL', "Costa": 'CRC', "Croatia": 'HRV',
                        "Denmark": 'DEN', "Egypt": 'EGY', "England": 'ENG',
                        "France": 'FRA', "Germany": 'GER', "Iran": 'IRN',
                        "Morocco": 'MAR', "Peru": 'PER', "Poland": 'POL',
                        "Portugal": 'POR', "Russia": 'RUS', "Arabia": 'KSA',
                        "Serbia": 'SER', "Spain": 'SPA', "Sweden": 'SWE',
                        "Switzerland": 'SWI', "Tunisia": 'TUN','United_states':'USA',
                        "Senegal": "SEN", "Uruguay": "URU", "Argentina":"ARG"}

INV_PAYS_EN = {v: k for k, v in PAYS_EN.items()}

def getDataFromMongo(collection_name):
    client = MongoClient('localhost', 27017)
    db = client['WorldCup']
    collection = db[collection_name]
    data = pd.DataFrame(list(collection.find()))
    client.close()
    data.sort_values(by="Count", ascending=False, inplace=True)
    return data

def playersCalculations(hashtag_name):
    client = MongoClient('localhost', 27017)
    db = client['WorldCup']
    collection_timeseries_Players = db[str(hashtag_name[1:])+'_Timeseries_Players']
    data = getDataFromMongo(str(hashtag_name[1:])+'_Players')
    data['Percentage'] = np.ceil((data['Count']*100)/data['Count'].sum())
    timing =  datetime.datetime.now()
    for i, row in data.iterrows():
        to_insert = {'Time':str(timing),
                'Player':row['Nom'],
                'Percentage':str(row['Percentage'],
                'Pays':INV_PAYS_EN[row['Pays']])}

        collection_timeseries_Players.insert_one(to_insert)
    return None

global hashtag
with open('../HASHTAG_FILE.txt') as f:
    hashtag = f.read()[1:7]
client = MongoClient('localhost', 27017)
db = client['WorldCup']
test = True
while test == True:
    playersCalculations(hashtag_name)
    time.sleep(60)
