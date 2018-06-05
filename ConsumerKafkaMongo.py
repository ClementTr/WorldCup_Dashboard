from kafka import KafkaConsumer
import json
from pymongo import MongoClient
from textblob import TextBlob
import sys
import re
from geotext import GeoText
import pycountry
import numpy as np
import pandas as pd

global hashtag, joueurs, db
hashtag = str('#FRAAUS')[1:]

def init():
    global joueurs, db
    client = MongoClient('localhost', 27017)
    db = client['test']
    joueurs = {}
    for joueur_pos in getPlayers():
                joueurs[joueur_pos[0].split(' ')[1]] = [joueur_pos[0].split(' ')[0], joueur_pos[1], joueur_pos[2]]

def getPays():
    pays = {'Russie':'RUS','Arabie':'ARA', 'Portugal':'POR', 'Espagne':'SPA', 'France':'FRA', 'Australie':'AUS',
       'Bresil':'BRA', 'Suisse':'SUI', 'Tunisie':'TUN', 'Angleterre':'ENG', 'Egypte':'EGY', 'Iran':'IRN',
       'Perou':'PER', 'Costa':'CRI', 'Allemagne':'GER', 'Suede':'SWE', 'Pologne':'POL', 'Colombie':'COL',
       'Maroc':'MAR', 'Danemark':'DEN', 'Serbie':'SER', 'Belgique':'BEL'}

    inv_pays = {v: k for k, v in pays.items()}

    team1 = inv_pays[hashtag[:3]]
    team2 = inv_pays[hashtag[3:]]

    return team1, team2

def getPlayers():
    data = pd.read_csv("Crawler/data_worldcup.csv")
    players_team1 = data[data['Code'] == hashtag[:3]][['Player','Post', 'Code']].values.tolist()
    players_team2 = data[data['Code'] == hashtag[3:]][['Player','Post', 'Code']].values.tolist()
    if len(players_team1) == 0:
        players_team1 = None
    elif len(players_team2) == 0:
        players_team2 = None
    return players_team1 + players_team2

def clean_tweet(tweet):
    return ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)", " ", tweet).split())

def analize_sentiment(tweet):
    analysis = TextBlob(clean_tweet(tweet))
    if analysis.sentiment.polarity > 0:
        return 1
    elif analysis.sentiment.polarity == 0:
        return 0
    else:
        return -1

def get_location(text):
    places = GeoText(text)
    if len(places.country_mentions) > 0:
        return pycountry.countries.get(alpha_2=list(places.country_mentions)[0]).alpha_3
    else:
        return None

def putDataToMongo(tweet):

    global joueurs

    print("New Tweet ! ")
     try:
        collection_tweets = db['tweets']
        collection_nations = db['nations']
        collection_joueurs = db['joueurs']

        #Cleaning (alpha numeric characters)
        clean = clean_tweet(tweet["text"])
        if tweet["location"] != None:
            clean_location = get_location(tweet["location"])
        else:
            clean_location = None

        
        for nom in joueurs.keys():
                if nom.lower() in clean.lower().split(' '):
                    print("Nom "+str(nom)+" Prenom "+str(joueurs[nom][0])+" Position "+str(joueurs[nom][1])+" Pays "+str(joueurs[nom][2]))
                    collection_joueurs.update_one({"Nom":nom, "Prenom":self.all[nom][0], "Position":self.all[nom][1], "Pays":self.all[nom][2]}, {"$inc": {"Count":1}}, upsert=True)


        tweetToMongo = {'created_at':tweet["created_at"],
                'text':clean,
                'location':tweet["location"],
                'positivity':analize_sentiment(clean),
                'locationBis':clean_location,
                'hashtags':tweet['hashtags']}

        collection_tweets.insert_one(tweetToMongo)
        if clean_location != None:
            collection_nations.update_one({"Nation":clean_location}, {"$inc": {"Count":1}}, upsert=True)
        print(tweetToMongo)
        print("On DataBase !")
        print("---------------------------------")
    except BaseException as e:
        print('failed ondata,', str(e))
        pass

init()
consumer = KafkaConsumer("***", bootstrap_servers='localhost:9092',value_deserializer=lambda m: json.loads(m.decode('ascii')))
for msg in consumer:
    putDataToMongo(msg.value)