from kafka import KafkaConsumer
import json
from pymongo import MongoClient
from textblob import TextBlob
from textblob_fr import PatternTagger, PatternAnalyzer
import sys
import re
from geotext import GeoText
import pycountry
import numpy as np
import pandas as pd
import emoji
from correspondance_emoji import *

global hashtag, joueurs, db
hashtag = str('#PORALG')[1:]

def init():
    global joueurs, db, collection_Tweets, collection_Players, collection_Nations, collection_Sentiments, collection_Sentiments_Agg
    client = MongoClient('localhost', 27017)
    db = client['test']
    collection_Tweets = db[hashtag+'_Tweets']
    collection_Players = db[hashtag+'_Players']
    collection_Nations = db[hashtag+'_Nations']
    collection_Sentiments = db[hashtag+'_Sentiments']
    collection_Sentiments_Agg = db[hashtag+'_Sentiments_Agg']
    collection_Emojis = db[hashtag+'_Emojis']

    joueurs = {}
    for joueur_pos in getPlayers():
                joueurs[joueur_pos[0].split(' ')[1]] = [joueur_pos[0].split(' ')[0], joueur_pos[1], joueur_pos[2]]

def getPays():
    pays = {'Russie':'RUS','Arabie':'ARA', 'Portugal':'POR', 'Espagne':'SPA', 'France':'FRA', 'Australie':'AUS',
       'Bresil':'BRA', 'Suisse':'SUI', 'Tunisie':'TUN', 'Angleterre':'ENG', 'Egypte':'EGY', 'Iran':'IRN',
       'Perou':'PER', 'Costa':'CRI', 'Allemagne':'GER', 'Suede':'SWE', 'Pologne':'POL', 'Colombie':'COL',
       'Maroc':'MAR', 'Danemark':'DEN', 'Serbie':'SER', 'Belgique':'BEL', 'Algerie':'ALG'}

    inv_pays = {v: k for k, v in pays.items()}

    team1 = inv_pays[hashtag[:3]]
    team2 = inv_pays[hashtag[3:]]

    return team1, team2

def getPlayers():
    global hashtag
    data = pd.read_csv("Crawler/data_worldcup.csv")
    players_team1 = data[data['Code'] == hashtag[:3]][['Player','Post_Simple', 'Code']].values.tolist()
    players_team2 = data[data['Code'] == hashtag[3:]][['Player','Post_Simple', 'Code']].values.tolist()
    if len(players_team1) == 0:
        players_team1 = None
    elif len(players_team2) == 0:
        players_team2 = None
    return players_team1 + players_team2

def clean_tweet(tweet):
    return ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)", " ", tweet).split())

def analize_sentiment_en(tweet):
    analysis = TextBlob(clean_tweet(tweet))
    if analysis.sentiment.polarity > 0:
        return 1
    elif analysis.sentiment.polarity == 0:
        return 0
    else:
        return -1

def analize_sentiment_fr(tweet):
    analysis = TextBlob(clean_tweet(tweet),pos_tagger=PatternTagger(), analyzer=PatternAnalyzer())
    if analysis[0] > 0:
        return 1
    elif analysis[0] == 0:
        return 0
    else:
        return -1

def get_location(text):
    places = GeoText(text)
    if len(places.country_mentions) > 0:
        return pycountry.countries.get(alpha_2=list(places.country_mentions)[0]).alpha_3
    else:
        return None

def get_emojisCode(text):
    global corresp
    emojis = []
    for em in [c for c in text if c in emoji.UNICODE_EMOJI]:
        emoj = emoji.demojize(em).split(":")[1]
        if emoj in corresp:
            emojis.append(corresp[emoj])
    return emojis


def putDataToMongo(tweet):

    global joueurs
    global hashtag

    print("New Tweet ! ")
    try:

        #Cleaning (alpha numeric characters)
        clean = clean_tweet(tweet["text"])
        if tweet["location"] != None:
            clean_location = get_location(tweet["location"])
        else:
            clean_location = None

        if tweet["lang"] == 'fr':
            sentiment = analize_sentiment_fr(clean)
        else :
            sentiment = analize_sentiment_en(clean)

        #UPDATE TWEETS
        
        tweetToMongo = {'created_at':tweet["created_at"],
                'text':clean,
                'location':tweet["location"],
                'positivity':sentiment,
                'locationBis':clean_location,
                'hashtags':tweet['hashtags']}

        collection_Tweets.insert_one(tweetToMongo)

        #UPDATE PLAYERS and SENTIMENT (PAR PAYS)
        for nom in joueurs.keys():
                if nom.lower() in clean.lower().split(' '):
                    collection_Players.update_one({"Nom":nom, "Prenom":joueurs[nom][0], "Position":joueurs[nom][1], "Pays":joueurs[nom][2]}, {"$inc": {"Count":1}}, upsert=True)
                    collection_Sentiments.update_one({"Nation":joueurs[nom][2], "Sentiments":str(sentiment)}, {"$inc": {"Count":1}}, upsert=True)

        #UPDATE NATIONS
        if clean_location != None:
            collection_Nations.update_one({"Nation":clean_location}, {"$inc": {"Count":1}}, upsert=True)

        emojis = get_emojisCode(tweet["text"])
        if len(emojis) > 0:
            for em in emojis:
                collection_Emojis.update_one({"Emoji":em}, {"$inc": {"Count":1}}, upsert=True)


        print(tweetToMongo)
        print("On DataBase !")
        print("---------------------------------")
    except BaseException as e:
        print('failed ondata,', str(e))
        pass

init()
consumer = KafkaConsumer("test", bootstrap_servers='localhost:9092',value_deserializer=lambda m: json.loads(m.decode('ascii')))
for msg in consumer:
    putDataToMongo(msg.value)
