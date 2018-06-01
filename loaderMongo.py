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


filters = sys.argv[1]
##joueurs = sys.argv[2]

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
        return np.nan

class StreamListener(tweepy.StreamListener):

    def on_connect(self):
        # Called initially to connect to the Streaming API
        print("You are now connected to the streaming API.")

    def on_status(self,status):
        print("New Tweet !")
        print(status.text)
        try:
            client = MongoClient('localhost', 27017)
            db = client['WorldCup']
            collection_tweets = db['FRAITA_Tweets']
            collection_nations = db['FRAITA_Nations']


            #Cleaning (alpha numeric characters)
            clean = clean_tweet(status.text)
            clean_location = get_location(status.user.location)

            tweet = {'created_at':status.created_at,
                    'text':clean,
                    'location':status.user.location,
                    'positivity':analize_sentiment(clean),
                    'locationBis':clean_location}

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
stream.filter(track=filters,languages=["fr"])
