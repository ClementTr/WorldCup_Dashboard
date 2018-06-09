from pymongo import MongoClient
import pymongo
import pandas as pd
from geotext import GeoText
import pycountry
import pandas as pd
import numpy as np
import os

PAYS = {'Russie':'RUS','Arabie':'ARA', 'Portugal':'POR', 'Espagne':'SPA', 'France':'FRA', 'Australie':'AUS',
   'Bresil':'BRA', 'Suisse':'SUI', 'Tunisie':'TUN', 'Angleterre':'ENG', 'Egypte':'EGY', 'Iran':'IRN',
   'Perou':'PER', 'Costa':'CRI', 'Allemagne':'GER', 'Suede':'SWE', 'Pologne':'POL', 'Colombie':'COL',
   'Maroc':'MAR', 'Danemark':'DEN', 'Serbie':'SER', 'Belgique':'BEL'}
INV_PAYS = {v: k for k, v in PAYS.items()}
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
	return data[["Nom", "Count"]].to_json(orient='values')

def getDataSentiment(hashtag_name):
    client = MongoClient('localhost', 27017)
    db = client['WorldCup']
    collection_name = hashtag_name+'_Sentiments'
    print(collection_name)
    collection = db[collection_name]
    data = pd.DataFrame(list(collection.find()))
    print(data)
    pays1 = hashtag_name[:3]
    pays2 = hashtag_name[3:]
    pourc_1 = np.round(((data[(data['Nation']==pays1) & (data['Sentiments']=='1')]['Count']/ data[(data['Nation']==pays1)]['Count'].sum()).values[0])*100)
    pourc_2 = np.round(((data[(data['Nation']==pays2) & (data['Sentiments']=='1')]['Count']/ data[(data['Nation']==pays2)]['Count'].sum()).values[0])*100)

    return pourc_1, pourc_2

def barplot_positivity(hashtag_name):
    collection_Sentiments= str(hashtag_name[1:])
    pourc_1, pourc_2 = getDataSentiment(collection_Sentiments)
    print("---------")
    print(pourc_1)
    print("----------")
    return [{"key": collection_Sentiments[:3], "value": pourc_1, "color": "blue"},{"key": collection_Sentiments[3:], "value": pourc_2, "color": "red"}]

def positivity_negativity(hashtag_name):
    client = MongoClient('localhost', 27017)
    db = client['test'] #On changera
    collection_name = str(hashtag_name[1:])+'_Sentiments_Agg'
    collection = db[collection_name]
    data = pd.DataFrame(list(collection.find()))
    data = data.reset_index()
    data = data.drop('_id', axis=1)
    data['Time'] = pd.to_datetime(data['Time'], infer_datetime_format=True)
    #data.set_index('Time', inplace=True)
    data.to_json(orient="records")




def players_postCalculations(hashtag_name):
    keeper_name, keeper_country = "", "";
    defenders_name, defenders_country = [], [];
    midfielders_name, midfielders_country = [], [];
    attackers_name, attackers_country = [], [];
    collection_players = str(hashtag_name[1:]) + "_Players"
    data = getDataFromMongo(collection_players)
    for poste in data['Position'].unique():
        if poste == 'Gardien':
            keeper_name = data[data['Position'] == poste]["Nom"].values.tolist()[0]
            keeper_country = INV_PAYS[data[data['Position'] == poste]["Pays"].values.tolist()[0]].lower()
        if poste == 'Défenseur':
            defenders_name = data[data['Position'] == poste]["Nom"].values.tolist()[:4]
            defenders_country = [INV_PAYS[i].lower() for i in data[data['Position'] == poste]["Pays"].values.tolist()[:4]]
        if poste == 'Milieu':
            midfielders_name = data[data['Position'] == poste]["Nom"].values.tolist()[:3]
            midfielders_country = [INV_PAYS[i].lower() for i in data[data['Position'] == poste]["Pays"].values.tolist()[:3]]
        if poste == 'Attaquant':
            attackers_name = data[data['Position'] == poste]["Nom"].values.tolist()[:3]
            attackers_country = [INV_PAYS[i].lower() for i in data[data['Position'] == poste]["Pays"].values.tolist()[:3]]
    return keeper_name, keeper_country, defenders_name, defenders_country, midfielders_name, midfielders_country, attackers_name, attackers_country
    # for poste in data['Post_Simple'].unique():
    #     if poste == 'Gardien':
    #         keeper_name = data[data['Post_Simple'] == poste]["Nom"].values[0]
    #         keeper_country = data[data['Post_Simple'] == poste]["Pays"].values[0]
    #     if poste == 'Défenseur':
    #         defenders_name = data[data['Post_Simple'] == poste]["Nom"].values[:4]
    #         defenders_country = data[data['Post_Simple'] == poste]["Pays"].values[:4]
    #     if poste == 'Milieu':
    #         midfielders_name = data[data['Post_Simple'] == poste]["Nom"].values[:3]
    #         midfielders_country = data[data['Post_Simple'] == poste]["Pays"].values[:3]
    #     if poste == 'Attaquant':
    #         attackers_name = data[data['Post_Simple'] == poste]["Nom"].values[:3]
    #         attackers_country = data[data['Post_Simple'] == poste]["Pays"].values[:3]
    # return keeper_name, keeper_country, defenders_name, defenders_country, midfielders_name, midfielders_country, attackers_name, attackers_country


def getPays(hashtag_name):
    try:
        team1 = INV_PAYS[hashtag_name[1:4]]
    except KeyError:
        team1 = "not_available"

    try:
        team2 = INV_PAYS[hashtag_name[4:]]
    except KeyError:
        team2 = "not_available"

    return team1, team2

def getClassement():
    data = pd.read_csv(path_groups)
    print(data.head())
    teams = []
    data['Difference'] = data['Buts_pour'] - data['Buts_contre']
    print(data.head())
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
