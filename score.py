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
with open('../HASHTAG_FILE.txt') as f:
    hashtag = f.read()[1:7]

#hashtag = "SENCOL"

var = True

client = MongoClient('localhost', 27017)
db = client['WorldCup']
collection_Score = db[hashtag+'_Score']


while var == True:
    res = requests.get(url).content
    soup = BeautifulSoup(res, 'html.parser')
    score = soup.find("span",attrs={"class":"score"}).text
    
    if "VS" in score:
        score1 , score2 = 0, 0
    else:
        score1 = int(score.split()[0])
        score2 = int(score.split()[-1])
        
    collection_Score.update_one({"Equipe":hashtag[:3]}, {"$inc": {"Score":score1}}, upsert=True)
    collection_Score.update_one({"Equipe":hashtag[3:]}, {"$inc": {"Score":score2}}, upsert=True)
    
    print(str(score1) +" - "+str(score2))
    
    time.sleep(60)