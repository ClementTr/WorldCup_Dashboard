from pymongo import MongoClient
import pymongo
import pandas as pd
import numpy as np
import json

PAYS = {'Russie':'RUS','Arabie':'ARA', 'Portugal':'POR', 'Espagne':'SPA', 'France':'FRA', 'Australie':'AUS',
   'Bresil':'BRA', 'Suisse':'SUI', 'Tunisie':'TUN', 'Angleterre':'ENG', 'Egypte':'EGY', 'Iran':'IRN',
   'Perou':'PER', 'Costa':'CRI', 'Allemagne':'GER', 'Suede':'SWE', 'Pologne':'POL', 'Colombie':'COL',
   'Maroc':'MAR', 'Danemark':'DEN', 'Serbie':'SER', 'Belgique':'BEL', 'Etats-Unis': 'USA', 'Algerie': 'ALG'}
INV_PAYS = {v: k for k, v in PAYS.items()}

global db

def initMongo():
	''' Init connexion to WorldCup Mongo Database'''
	global db
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
		if type(data['hashtags'][0][0]) == dict:
			data['hashtags'] = data['hashtags'].apply(transformHashtags)
	data.reset_index(inplace=True)
	# print(data.iloc[:,2:])
	data.iloc[:,2:].to_parquet(matchname+".parquet")

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

	keeper_name, keeper_country = "", "";
	defenders_name, defenders_country = [], [];
	midfielders_name, midfielders_country = [], [];
	attackers_name, attackers_country = [], [];

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
	    json.dump([{"key": pays1, "value": pourc_1, "color": "blue"},{"key": pays2, "value": pourc_2, "color": "red"}], outfile)


def saveTimeSeries(matchname):
	'''Save TimeSeries Sentiments in CSV'''
	collection = db[matchname+"_Sentiments_Agg"]
	data = pd.DataFrame(list(collection.find()))
	data = data[["Time","Positive","Negative","Neutral"]]
	data["Positive"] = data["Positive"].apply(int)
	data["Negative"] = data["Negative"].apply(int)
	data["Neutral"] = data["Neutral"].apply(int)
	data["Positive"] = np.ceil((data["Positive"]*100)/data["Positive"].sum())
	data["Negative"] = np.ceil((data["Negative"]*100)/data["Negative"].sum())
	data["Neutral"] = np.ceil((data["Neutral"]*100)/data["Neutral"].sum())
	data[["Time","Positive","Negative","Neutral"]].to_csv(matchname+"_Sentiments_Agg.csv",index=False)

def removeMongoCollections(hashtag):
	'''Remove Nations, Tweets & Joueurs collections '''
	for collect in [hashtag+"_Nations",hashtag+"_Tweets",hashtag+"_Players"]:
		collection = db[collect]
		collection.drop()

initMongo()
hashtag = "#FRAUSA"
matchname = str(hashtag[1:])
# saveCountriesData(matchname)
# saveTweets(matchname)
#savePositivity(matchname)
# saveTimeSeries(matchname)
#saveTopPlayers(matchname)
#save11Players(matchname)
#removeMongoCollections(matchname)
