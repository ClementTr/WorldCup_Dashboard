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

print("init")
consumer = KafkaConsumer("WorldCup", bootstrap_servers='localhost:9092',value_deserializer=lambda m: json.loads(m.decode('ascii')))
for msg in consumer:
    print(msg)
