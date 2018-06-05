###Scirpit stream, classify import to mongoD

import tweepy
import json
from pymongo import MongoClient
from textblob import TextBlob
import sys
import re
from geotext import GeoText
import pycountry
import numpy as np


#API SET UP
CONSUMER_KEY    = '***'
CONSUMER_SECRET = '***'

# Access:
ACCESS_TOKEN  = '***'
ACCESS_SECRET = '***'

def twitter_setup():
    """
    Utility function to setup the Twitter's API
    with our access keys provided.
    """
    # Authentication and access using keys:
    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_SECRET)

    # Return API with authentication:
    api = tweepy.API(auth)
    return api

api = twitter_setup()

global hashtag
hashtag = str('#FRAAUS')[1:]

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
    data = pd.read_csv("WorldCup_Dashboard/Crawler/data_worldcup.csv")
    players_team1 = data[data['Code'] == hashtag[:3]][['Player','Post']].values.tolist()
    players_team2 = data[data['Code'] == hashtag[3:]][['Player','Post']].values.tolist()
    if len(players_team1) == 0:
        players_team1 = None
    elif len(players_team2) == 0:
        players_team2 = None
    return players_team1,players_team2

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

class StreamListener(tweepy.StreamListener):

    def on_connect(self):
        # Called initially to connect to the Streaming API
        global hashtag
        print("You are now connected to the streaming API.")
        i = 0
        if i == 0:
            self.joueurs1, self.joueurs2  = getPlayers(hashtag)
            self.all = []
            for joueur_pos in self.joueurs1+self.joueurs2:
                self.all.append(joueur_pos[0].split(' ')[1])

    def on_status(self,status):
        print("New Tweet !")
        print(self.all)
        try:
            client = MongoClient('localhost', 27017)
            db = client['test']
            collection_tweets = db['tweets']
            collection_nations = db['nations']
            collection_joueurs = db['joueurs']


            #Cleaning (alpha numeric characters)
            clean = clean_tweet(status.text)
            clean_location = get_location(status.user.location)

            print(clean)
            #joueurs
            for joueur in self.all:
                if joueur.lower() in clean.lower().split(' '):
                    collection_joueurs.update_one({"Joueur":joueur}, {"$inc": {"Count":1}}, upsert=True)


            tweet = {'created_at':status.created_at,
                    'text':clean,
                    'location':status.user.location,
                    'positivity':analize_sentiment(clean),
                    'locationBis':clean_location,
                    'hashtags':[i['text'] for i in status.entities['hashtags']]}

            collection_tweets.insert_one(tweet)
            collection_nations.update_one({"Nation":clean_location}, {"$inc": {"Count":1}}, upsert=True)

            print("On DataBase !")
            print("---------------------------------")
        except BaseException as e:
            print('failed ondata,', str(e))
            pass


    def on_limit(self, track):
        print("Limite Atteinte !")


    def on_error(self, status_code):
        if status_code == 420:
            return False


stream_listener = StreamListener()
stream = tweepy.Stream(auth=api.auth, listener=stream_listener)
stream.filter(track=[hashtag],languages=["en"])
