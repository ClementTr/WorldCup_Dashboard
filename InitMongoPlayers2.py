from pymongo import MongoClient
import pandas as pd
import datetime
import numpy as np

global hashtag
with open('HASHTAG_FILE2.txt') as f:
   hashtag = f.read()[1:7]
#hashtag = "FRAARG"

def getPlayers():
    global hashtag
    # print(hashtag)
    data = pd.read_csv("Crawler/data_worldcup.csv")
    #print(data)
    players_team1 = data[data['Code'] == hashtag[:3]][['Lastname','Firstname','Post', 'Code']].values.tolist()
    players_team2 = data[data['Code'] == hashtag[3:]][['Lastname','Firstname','Post', 'Code']].values.tolist()
    #print(players_team2)
    if len(players_team1) == 0:
        players_team1 = None
        #print("players_team1")
        return None
    elif len(players_team2) == 0:
        players_team2 = None
        print("players_team2")
        return None
    return players_team1 + players_team2

client = MongoClient('localhost', 27017)
db = client['WorldCup']
collection_Players = db[hashtag+'_Players']

joueurs = {}
for joueur_pos in getPlayers():
    joueurs[joueur_pos[0]] = [joueur_pos[1], joueur_pos[2], joueur_pos[3]]

for nom in joueurs.keys():
    #print({"Nom":nom, "Prenom":joueurs[nom][0], "Position":joueurs[nom][1], "Pays":joueurs[nom][2]})
    collection_Players.update_one({"Nom":nom, "Prenom":joueurs[nom][0], "Position":joueurs[nom][1], "Pays":joueurs[nom][2]}, {"$inc": {"Count":0}}, upsert=True)    

client.close()     
