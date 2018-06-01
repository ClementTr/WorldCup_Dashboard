from pymongo import MongoClient
import pymongo
import pandas as pd
from geotext import GeoText
import pycountry
import numpy as np

def getDataFromMongo(hashtag_name):
    client = MongoClient('localhost', 27017)
    db = client['WorldCup']
    collection_nation = str(hashtag_name[1:]) + "_Nations"
    collection = db[collection_nation]
    data = pd.DataFrame(list(collection.find()))
    data.sort_values(by="count", ascending=False, inplace=True)
    return data

def countriesCalculations():
    data = getDataFromMongo()
    return data[["Nation", "Count"]].to_json(orient='values')
