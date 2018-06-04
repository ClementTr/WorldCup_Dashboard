from pymongo import MongoClient
import pymongo
import pandas as pd

global db

def initMongo():
	''' Init connexion to WorldCup Mongo Database'''
	global db
	client = MongoClient('localhost', 27017)
	db = client['WorldCup']

def saveCountriesData(collection_name):
	''' 
	Save Countries data 
	Input : 
		- collection_name : string
	Output : 
		- Dataframe : file
	'''
	collection = db[collection_name]
	data = pd.DataFrame(list(collection.find()))
	data.sort_values(by="Count", ascending=False, inplace=True)
	data[['Count','Nation']].to_csv(collection_name+".csv",index=False)

def transformHashtags(dic):
    tmp = []
    for i in dic:
        tmp.append(i['text'])
    return tmp

def saveTweets(collection_name):
	''' 
	Save Tweets data 
	Input : 
		- collection_name : string
	Output : 
		- Dataframe : file
	'''
	client = MongoClient('localhost', 27017)
	db = client['WorldCup']
	collection = db[collection_name]
	data = pd.DataFrame(list(collection.find()))
	if 'hashtags' in data.columns:
		if type(data['hashtags'][0][0]) == dict:
			data['hashtags'] = data['hashtags'].apply(transformHashtags)
	data.iloc[:,1:].to_parquet(collection_name+".parquet")

def saveTopPlayers(collection_name):
	''' 
	Save Top players data 
	Input : 
		- collection_name : string
	Output : 
		- Dataframe : file
	'''
	collection = db[collection_name]
	data = pd.DataFrame(list(collection.find()))
	data.sort_values(by="Count", ascending=False, inplace=True).iloc[:10,:]
	# data.to_csv(collection_name+"_TopPlayers.csv",index=False)

def newPost(post):
	if 'Gardien' in post:
	    return 'Gardien'
	elif 'Défenseur' in post or 'Arrière' in post:
	    return 'Défenseur'
	elif 'Milieu' in post:
	    return 'Milieu'
	elif 'Ailier' in post or 'Avant' in post:
	    return 'Attaquant'

def save11Players(collection_name):
	''' 
	Save Top 11 players data 
	Input : 
		- collection_name : string
	Output : 
		- Dataframe : file
	'''
	collection = db[collection_name]
	data = pd.DataFrame(list(collection.find()))
	data['Post_Simple'] = data['Post'].apply(newPost)
	top11 = pd.DataFrame()
	for poste in test['Post_Simple'].unique():
	    if poste == 'Gardien':
	        top11 = top11.append(data[data['Post_Simple'] == poste].iloc[0,:])
	    if poste == 'Défenseur':
	        top11 = top11.append(data[data['Post_Simple'] == poste].iloc[:4,:])
	    if poste == 'Milieu':
	        top11 = top11.append(data[data['Post_Simple'] == poste].iloc[:3,:])
	    if poste == 'Attaquant':
	        top11 = top11.append(data[data['Post_Simple'] == poste].iloc[:3,:])
	#top11.to_csv(collection_name+"_Top11Players.csv",index=False)

def savePositivity(collection_name):
	'''TO DO'''

def saveTimeSeries(collection_name):
	'''TO DO'''

def removeMongoCollections(hashtag):
	'''Remove Nations, Tweets & Joueurs collections '''
	

initMongo()
hashtag = "#FRAITA"
collection_name = str(hashtag[1:])
saveCountriesData(collection_name+"_Nations")
saveTweets(collection_name+"_Tweets")


