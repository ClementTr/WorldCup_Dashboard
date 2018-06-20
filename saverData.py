from pymongo import MongoClient
import pymongo
import pandas as pd
import numpy as np
import json
from datetime import datetime, timedelta

PAYS = {"Australia": 'AUS', "Belgium": 'BEL', "Brazil": 'BRA',
                        "Colombia": 'COL', "Costa": 'CRI', "Croatia": 'HRV',
                        "Denmark": 'DEN', "Egypt": 'EGY', "England": 'ENG',
                        "France": 'FRA', "Germany": 'GER', "Iran": 'IRN',
                        "Morocco": 'MAR', "Peru": 'PER', "Poland": 'POL',
                        "Portugal": 'POR', "Russia": 'RUS', "Arabia": 'KSA',
                        "Serbia": 'SER', "Spain": 'SPA', "Sweden": 'SWE',
                        "Switzerland": 'SWI',"Senegal":"SEN","Tunisia": 'TUN','United_states':'USA'}
INV_PAYS = {v: k for k, v in PAYS.items()}

global db,client

def initMongo():
	''' Init connexion to WorldCup Mongo Database'''
	global db,client
	client = MongoClient('localhost', 27017)
	db = client['WorldCup']

def saveCountriesData(matchname):
	'''
	Save Countries data
	Input :
		- matchname : string
	Output :
		- Dataframe : file
	'''
	collection = db[matchname+"_Nations"]
	data = pd.DataFrame(list(collection.find()))
	data.sort_values(by="Count", ascending=False, inplace=True)
	data['Count'] = np.ceil((data['Count'] * 100)/data['Count'].sum())
	data[['Count','Nation']].to_csv(matchname+"_Nations.csv",index=False)

def transformHashtags(dic):
    tmp = []
    for i in dic:
        tmp.append(i['text'])
    return tmp

def saveTweets(matchname):
	'''
	Save Tweets data
	Input :
		- matchname : string
	Output :
		- Dataframe : file
	'''
	collection = db[matchname+"_Tweets"]
	data = pd.DataFrame(list(collection.find()))
	if 'hashtags' in data.columns:
		if type(data['hashtags'][0]) == dict:
			data['hashtags'] = data['hashtags'].apply(transformHashtags)
	data.reset_index(inplace=True)
	# print(data.iloc[:,2:])
	data.iloc[:,2:].to_csv(matchname+"_Tweets.csv")

def saveTopPlayers(matchname):
	'''
	Save Top players data
	Input :
		- matchname : string
	Output :
		- Dataframe : file
	'''
	collection = db[matchname+"_Players"]
	data = pd.DataFrame(list(collection.find()))
	# print(data)
	data.sort_values(by="Count", ascending=False, inplace=True)
	data['Count'] = np.ceil((data['Count']*100)/data['Count'].sum())
	data = data.iloc[:10,:]
	data[['Nom','Count']].to_json(matchname+"_TopPlayers.json",orient='values')#.to_csv(matchname+"_TopPlayers.csv",index=False)

def newPost(post):
	if 'Gardien' in post:
	    return 'Gardien'
	elif 'Défenseur' in post or 'Arrière' in post:
	    return 'Défenseur'
	elif 'Milieu' in post:
	    return 'Milieu'
	elif 'Ailier' in post or 'Avant' in post:
	    return 'Attaquant'

def save11Players(matchname):
	'''
	Save Top 11 players data
	Input :
		- matchname : string
	Output :
		- Dataframe : file
	'''
	collection = db[matchname+"_Players"]
	data = pd.DataFrame(list(collection.find()))
	data.sort_values(by="Count", ascending=False, inplace=True)

	keeper_name, keeper_country = "", "";
	defenders_name, defenders_country = [], [];
	midfielders_name, midfielders_country = [], [];
	attackers_name, attackers_country = [], [];

	for poste in data['Position'].unique():
	    if poste == 'Goalkeeper':
	        keeper_name = data[data['Position'] == poste]["Nom"].values.tolist()[0]
	        keeper_country = INV_PAYS[data[data['Position'] == poste]["Pays"].values.tolist()[0]].capitalize()
	    if poste == 'Defender':
	        defenders_name = data[data['Position'] == poste]["Nom"].values.tolist()[:4]
	        defenders_country = [INV_PAYS[i].capitalize() for i in data[data['Position'] == poste]["Pays"].values.tolist()[:4]]
	    if poste == 'Midfielder':
	        midfielders_name = data[data['Position'] == poste]["Nom"].values.tolist()[:3]
	        midfielders_country = [INV_PAYS[i].capitalize() for i in data[data['Position'] == poste]["Pays"].values.tolist()[:3]]
	    if poste == 'Forward':
	        attackers_name = data[data['Position'] == poste]["Nom"].values.tolist()[:3]
	        attackers_country = [INV_PAYS[i].capitalize() for i in data[data['Position'] == poste]["Pays"].values.tolist()[:3]]

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

	with open(matchname+"_Top11Players.json", 'w') as outfile:
	    json.dump({
	  "Name": {
	    "Keeper": [keeper_name],
	    "Defenders": defenders_name,
	    "Midfielders": midfielders_name,
	    "Attackers": attackers_name
	    },
	  "Country":{
	    "Keeper": [keeper_country],
	    "Defenders": defenders_country,
	    "Midfielders": midfielders_country,
	    "Attackers": attackers_country
	  }
	},outfile)

def savePositivity(matchname):
	'''Save Positivity of Tweets in JSON format'''
	collection = db[matchname+"_Sentiments"]
	data = pd.DataFrame(list(collection.find()))
	pays1 = matchname[:3]
	pays2 = matchname[3:]
	pourc_1 = np.ceil(((data[(data['Nation']==pays1) & (data['Sentiments']=='1')]['Count']/ data[(data['Nation']==pays1)]['Count'].sum()).values[0])*100)
	pourc_2 = np.ceil(((data[(data['Nation']==pays2) & (data['Sentiments']=='1')]['Count']/ data[(data['Nation']==pays2)]['Count'].sum()).values[0])*100)
	with open(matchname+"_Sentiments.json", 'w') as outfile:
	    json.dump([{"key": INV_PAYS[pays1], "value": pourc_1, "color": "blue", "trig":pays1},{"key": INV_PAYS[pays2], "value": pourc_2, "color": "red", "trig":pays2}], outfile)


def saveTimeSeries(matchname):
	'''Save TimeSeries Sentiments in CSV'''
	collection = db[matchname+"_Sentiments_Agg"]
	data = pd.DataFrame(list(collection.find()))
	data = data[["Time","Positive","Negative","Neutral"]]
	data['Time'] = pd.to_datetime(data['Time'], infer_datetime_format=True)
	data["Time"] = data["Time"].apply(lambda x : x+timedelta(hours=2))
	data['cumul'] = data[["Negative","Positive"]].applymap(int).sum(axis=1)
	data['Negative'] = np.ceil((data['Negative'].astype(int)/data['cumul'])*100)
	#data['Neutral'] = np.ceil((data['Neutral'].astype(int)/data['cumul'])*100)
	data['Positive'] = np.ceil((data['Positive'].astype(int)/data['cumul'])*100)
	data[["Time","Positive","Negative"]].drop_duplicates('Time').dropna().to_csv(matchname+"_Sentiments_Agg.csv",index=False)

def saveEmojis(matchname):
    collection = db[matchname+"_Emojis"]
    data = pd.DataFrame(list(collection.find()))
    #data = getDataFromMongo(collection)
    data = data[["Emoji", "Count"]]
    data.sort_values(by="Count", ascending=False, inplace=True)
    data[["Emoji", "Count"]].to_json(matchname+"_Emojis.json",orient="records")

def removeMongoCollections(hashtag):
	'''Remove Nations, Tweets & Joueurs collections '''
	for collect in [hashtag+"_Nations",hashtag+"_Tweets",hashtag+"_Players",hashtag+"_Sentiments",hashtag+"_Sentiments_Agg",hashtag+"_Emojis"]:
		collection = db[collect]
		collection.drop()

initMongo()
# with open('HASHTAG_FILE.txt') as f:
#     hashtag = f.read()
hashtag = "#POLSEN"
matchname = str(hashtag[1:])
saveCountriesData(matchname)
saveTweets(matchname)
savePositivity(matchname)
saveTimeSeries(matchname)
saveTopPlayers(matchname)
save11Players(matchname)
saveEmojis(matchname)
#removeMongoCollections(matchname)
client.close()
