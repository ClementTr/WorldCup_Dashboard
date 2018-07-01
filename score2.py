import requests
import time
from bs4 import BeautifulSoup
from pymongo import MongoClient
import argparse

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--url')
args = parser.parse_args()

url = args.url

global hashtag
with open('HASHTAG_FILE2.txt') as f:
    hashtag = f.read()[1:7]

#hashtag = "SENCOL"

var = True

client = MongoClient('localhost', 27017)
db = client['WorldCup']
collection_Score = db[hashtag+'_Score']

collection_Score.update_one({"Equipe":hashtag[:3]}, {"$set": {"Score":0}}, upsert=True)
collection_Score.update_one({"Equipe":hashtag[3:]}, {"$set": {"Score":0}}, upsert=True)

while var == True:
    res = requests.get(url).content
    soup = BeautifulSoup(res, 'html.parser')
    score = soup.find("span",attrs={"class":"fi-s__scoreText"}).text
    score = score.replace("\r\n","")
    
    if ":" in score:
        score1 , score2 = 0, 0

    else:
        score1 = int(score.split("-")[0])
        score2 = int(score.split("-")[-1])

        equipe1 = hashtag[:3]
        equipe2 = hashtag[3:]

    for i in list(collection_Score.find()):
        if i["Equipe"] == equipe1 :
            if i["Score"] != score1 :
                collection_Score.update_one({"Equipe":hashtag[:3]}, {"$set": {"Score":score1}}, upsert=True)

        if i["Equipe"] == equipe2 :
            if i["Score"] != score1 :
                collection_Score.update_one({"Equipe":hashtag[3:]}, {"$set": {"Score":score2}}, upsert=True)
    
    time.sleep(60)
