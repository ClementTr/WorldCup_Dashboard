###Scirpit stream, classify import to mongoD

import tweepy
import json
from kafka import KafkaProducer


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
hashtag = '#Cecchinato'


class StreamListener(tweepy.StreamListener):

    def on_connect(self):
        print("You are now connected to the streaming API.")
        self.producer = KafkaProducer(bootstrap_servers="localhost:9092",value_serializer=lambda m: json.dumps(m).encode('ascii'))
        

    def on_status(self,status):
        print("New Tweet ! ")
        tweet = {'created_at':str(status.created_at),
                'text':status.text,
                'location':status.user.location,
                'hashtags':[i['text'] for i in status.entities['hashtags']]}
        self.producer.send("***", tweet)
        self.producer.flush()

        print("On Kafka !")
        print("---------------------------------")
    


    def on_limit(self, track):
        print("Limite Atteinte !")


    def on_error(self, status_code):
        if status_code == 420:
            return False


stream_listener = StreamListener()
stream = tweepy.Stream(auth=api.auth, listener=stream_listener)
stream.filter(track=[hashtag],languages=["en"])
