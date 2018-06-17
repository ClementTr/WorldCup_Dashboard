from pymongo import MongoClient
import pymongo
import pandas as pd
from geotext import GeoText
import pycountry
import pandas as pd
import numpy as np
import os
import json

# PAYS = {'Russie':'RUS','Arabie':'ARA', 'Portugal':'POR', 'Espagne':'SPA', 'France':'FRA', 'Australie':'AUS',
#    'Bresil':'BRA', 'Suisse':'SUI', 'Tunisie':'TUN', 'Angleterre':'ENG', 'Egypte':'EGY', 'Iran':'IRN',
#    'Perou':'PER', 'Costa':'CRC', 'Allemagne':'GER', 'Suede':'SWE', 'Pologne':'POL', 'Colombie':'COL',
#    'Maroc':'MAR', 'Danemark':'DEN', 'Serbie':'SER', 'Belgique':'BEL', 'Etats-Unis': 'USA', 'Algerie': 'ALG'}

PAYS_EN = {"Australia": 'AUS', "Belgium": 'BEL', "Brazil": 'BRA',
                        "Colombia": 'COL', "Costa": 'CRC', "Croatia": 'HRV',
                        "Denmark": 'DEN', "Egypt": 'EGY', "England": 'ENG',
                        "France": 'FRA', "Germany": 'GER', "Iran": 'IRN',
                        "Morocco": 'MAR', "Peru": 'PER', "Poland": 'POL',
                        "Portugal": 'POR', "Russia": 'RUS', "Arabia": 'ARA',
                        "Serbia": 'SER', "Spain": 'SPA', "Sweden": 'SWE',
                        "Switzerland": 'SWI', "Tunisia": 'TUN','United_states':'USA'}


# INV_PAYS = {v: k for k, v in PAYS.items()}
INV_PAYS_EN = {v: k for k, v in PAYS_EN.items()}

path_groups = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'static/worldcup/data/data_group.csv')
path_matchs = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'static/worldcup/data/matchs.csv')
path_data = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'static/worldcup/data/')

def getDataFromMongo(collection_name):
    client = MongoClient('localhost', 27017)
    db = client['WorldCup']
    collection = db[collection_name]
    data = pd.DataFrame(list(collection.find()))
    client.close()
    data.sort_values(by="Count", ascending=False, inplace=True)
    return data

def countriesCalculations(hashtag_name):
    collection_nation = str(hashtag_name[1:]) + "_Nations"
    data = getDataFromMongo(collection_nation)
    data = data[["Nation", "Count"]]
    data['Percentage'] = np.ceil((data['Count'] * 100)/data['Count'].sum())
    return data[["Nation", "Percentage"]].to_json(orient='values')

def playersCalculations(hashtag_name):
    collection_players = str(hashtag_name[1:]) + "_Players"
    data = getDataFromMongo(collection_players)
    data = data[["Nom", "Count"]]
    data['Percentage'] = np.ceil((data['Count']*100)/data['Count'].sum())
    return data[["Nom", "Percentage"]].to_json(orient='values')

def getDataSentiment(hashtag_name):
    client = MongoClient('localhost', 27017)
    db = client['WorldCup']
    collection_name = hashtag_name+'_Sentiments'
    collection = db[collection_name]
    data = pd.DataFrame(list(collection.find()))
    client.close()
    pays1 = hashtag_name[:3]
    pays2 = hashtag_name[3:]
    pourc_1 = np.round(((data[(data['Nation']==pays1) & (data['Sentiments']=='1')]['Count']/ data[(data['Nation']==pays1)]['Count'].sum()).values[0])*100)
    pourc_2 = np.round(((data[(data['Nation']==pays2) & (data['Sentiments']=='1')]['Count']/ data[(data['Nation']==pays2)]['Count'].sum()).values[0])*100)

    return pourc_1, pourc_2

def barplot_positivity(hashtag_name):
    collection_Sentiments= str(hashtag_name[1:])
    pourc_1, pourc_2 = getDataSentiment(collection_Sentiments)
    return [{"key": INV_PAYS_EN[collection_Sentiments[:3]], "value": pourc_1, "color": "blue","trig":collection_Sentiments[:3]},{"key": INV_PAYS_EN[collection_Sentiments[3:]], "value": pourc_2, "color": "red","trig":collection_Sentiments[3:]}]

def positivity_negativity(hashtag_name):
    client = MongoClient('localhost', 27017)
    db = client['WorldCup']
    collection_name = str(hashtag_name[1:])+'_Sentiments_Agg'
    collection = db[collection_name]
    data = pd.DataFrame(list(collection.find()))
    client.close()
    data = data.reset_index()
    data = data.drop(['_id','index'], axis=1)
    data['Time'] = pd.to_datetime(data['Time'], infer_datetime_format=True)
    data['cumul'] = data[["Negative","Positive"]].applymap(int).sum(axis=1)
    data['Negative'] = np.ceil((data['Negative'].astype(int)/data['cumul'])*100)
    # data['Neutral'] = np.ceil((data['Neutral'].astype(int)/data['cumul'])*100)
    data['Positive'] = np.ceil((data['Positive'].astype(int)/data['cumul'])*100)
    return data[["Time","Positive","Negative"]].drop_duplicates('Time').dropna().to_json(orient="records")
    # return data.drop_duplicates('Time').to_json(orient="records")

def get_Emojis(hashtag_name):
    collection_name = str(hashtag_name[1:]) + "_Emojis"
    try :
        data = getDataFromMongo(collection_name)
        data = data[["Emoji", "Count"]].iloc[:25,:]
        return json.loads(data[["Emoji", "Count"]].to_json(orient="records"))
    except:
        return [{}]



def players_postCalculations(hashtag_name):
    keeper_name, keeper_country = "", "";
    defenders_name, defenders_country = [], [];
    midfielders_name, midfielders_country = [], [];
    attackers_name, attackers_country = [], [];
    collection_players = str(hashtag_name[1:]) + "_Players"
    data = getDataFromMongo(collection_players)
    for poste in data['Position'].unique():
        if poste == 'Goalkeeper':
            keeper_name = data[data['Position'] == poste]["Nom"].values.tolist()[0]
            keeper_country = INV_PAYS_EN[data[data['Position'] == poste]["Pays"].values.tolist()[0]].capitalize()
        if poste == 'Defender':
            defenders_name = data[data['Position'] == poste]["Nom"].values.tolist()[:4]
            defenders_country = [INV_PAYS_EN[i].capitalize() for i in data[data['Position'] == poste]["Pays"].values.tolist()[:4]]
        if poste == 'Midfielder':
            midfielders_name = data[data['Position'] == poste]["Nom"].values.tolist()[:3]
            midfielders_country = [INV_PAYS_EN[i].capitalize() for i in data[data['Position'] == poste]["Pays"].values.tolist()[:3]]
        if poste == 'Forward':
            attackers_name = data[data['Position'] == poste]["Nom"].values.tolist()[:3]
            attackers_country = [INV_PAYS_EN[i].capitalize() for i in data[data['Position'] == poste]["Pays"].values.tolist()[:3]]
    if keeper_name == "":
       keeper_name = "Undefined"
       keeper_country = "Undefined"
    if len(defenders_name) < 4:
       for i in range(len(defenders_name),4):
           defenders_name.append("Undefined")
           defenders_country.append("Undefined")
    if len(midfielders_name) < 3:
       for i in range(len(midfielders_name),3):
           midfielders_name.append("Undefined")
           midfielders_country.append("Undefined")
    if len(attackers_name) < 3:
       for i in range(len(attackers_name),3):
           attackers_name.append("Undefined")
           attackers_country.append("Undefined")
    return keeper_name, keeper_country, defenders_name, defenders_country, midfielders_name, midfielders_country, attackers_name, attackers_country


def getPays(hashtag_name):
    try:
        team1 = INV_PAYS_EN[hashtag_name[1:4]]
    except KeyError:
        team1 = "not_available"

    try:
        team2 = INV_PAYS_EN[hashtag_name[4:]]
    except KeyError:
        team2 = "not_available"

    return team1.capitalize(), team2.capitalize()

def getClassement():
    data = pd.read_csv(path_groups)
    #print(data.head())
    teams = []
    data['Difference'] = data['Buts_pour'] - data['Buts_contre']
    #print(data.head())
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

def getEmojisClassement(hashtag_name):
    with open(path_data+hashtag_name+'/'+hashtag_name+"_Emojis.json") as f:
        return json.loads(f.read())
