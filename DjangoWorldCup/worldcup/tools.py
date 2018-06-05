from pymongo import MongoClient
import pymongo
import pandas as pd
from geotext import GeoText
import pycountry
import pandas as pd
import numpy as np
import os

path_groups = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'static/worldcup/data/data_group.csv')
path_matchs = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'static/worldcup/data/matchs.csv')

def getDataFromMongo(collection_name):
    client = MongoClient('localhost', 27017)
    db = client['WorldCup']
    collection = db[collection_name]
    data = pd.DataFrame(list(collection.find()))
    data.sort_values(by="Count", ascending=False, inplace=True)
    return data

def countriesCalculations(hashtag_name):
	collection_nation = str(hashtag_name[1:]) + "_Nations"
	data = getDataFromMongo(collection_nation)
	return data[["Nation", "Count"]].to_json(orient='values')

def playersCalculations(hashtag_name):
	collection_players = str(hashtag_name[1:]) + "_Players"
	data = getDataFromMongo(collection_players)
	return data[["Nation", "Count"]].to_json(orient='values')

def getPays(hashtag_name):
    pays = {'Russie':'RUS','Arabie':'ARA', 'Portugal':'POR', 'Espagne':'SPA', 'France':'FRA', 'Australie':'AUS',
       'Bresil':'BRA', 'Suisse':'SUI', 'Tunisie':'TUN', 'Angleterre':'ENG', 'Egypte':'EGY', 'Iran':'IRN',
       'Perou':'PER', 'Costa':'CRI', 'Allemagne':'GER', 'Suede':'SWE', 'Pologne':'POL', 'Colombie':'COL',
       'Maroc':'MAR', 'Danemark':'DEN', 'Serbie':'SER', 'Belgique':'BEL'}

    inv_pays = {v: k for k, v in pays.items()}

    try:
        team1 = inv_pays[hashtag_name[1:4]]
    except KeyError:
        team1 = "not_available"

    try:
        team2 = inv_pays[hashtag_name[4:]]
    except KeyError:
        team2 = "not_available"

    return team1, team2

def getClassement():
    data = pd.read_csv(path_groups)
    print(data.head())
    teams = []
    data['Difference'] = data['Buts_pour'] - data['Buts_contre']
    for group in data['Group'].unique():
        tmp = data[data['Group'] == group]
        tmp.sort_values(by="Points",inplace=True,ascending=False)
        tmp['Position'] = ["1","2","3","4"]
        teams.append(tmp.to_dict(orient='records'))
    return teams

def getMatchs():
    matchs = []
    data = pd.read_csv(path_matchs,sep=";")
    for group in data['Group'].unique():
        matchs.append(data[data['Group'] == group].to_dict(orient='records'))
    return matchs


def getTables():
	teams = getClassement()
	matchs = getMatchs()
	groups = ["Groupe A","Groupe B","Groupe C","Groupe D","Groupe E","Groupe F","Groupe G","Groupe H"]
	return zip(teams,groups,matchs,[i for i in range(0,8)])
