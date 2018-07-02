#To Modify

## Kafka
1) Aller dans /home/ubuntu/kafka_2.11-1.1.0

2) On check que les deux topics (WorldCup & WorldCup2) sont dans la liste : ./bin/kafka-topics.sh --zookeeper localhost:2181 --list

3) On supprime les deux topics : ./bin/kafka-topics.sh --zookeeper localhost:2181 --delete --topic WorldCup puis ./bin/kafka-topics.sh --zookeeper localhost:2181 --delete --topic WorldCup2

4) On check que les deux topics (WorldCup & WorldCup2) ne sont plus dans la liste : ./bin/kafka-topics.sh --zookeeper localhost:2181 --list

5) On recrée les deux topics : ./bin/kafka-topics.sh --zookeeper localhost:2181 --create --topic WorldCup --partitions 1 --replication-factor 1 puis ./bin/kafka-topics.sh --zookeeper localhost:2181 --create --topic WorldCup2 --partitions 1 --replication-factor 1

6) On vérifie que les deux topics ont bien été créé : ./bin/kafka-topics.sh --zookeeper localhost:2181 --list

## Backend Match 1

### Initialisation Mongo Players
1) Aller dans le dossier WorldCup_Dashboard
2) python InitMongoPlayers.py

### Consumer
1) Aller dans le dossier  ConsumerKafkaMongo 
2) nohup python ConsumerKafkaMongo.py & puis ctrl-c

### Loader 
1) Aller dans le dossier  loaderKafka
2) nohup python loaderKafka.py & puis ctrl-c

### Score
1) Aller dans le dossier WorldCup_Dashboard
2) nohup python score.py --url <URL_DU_MATCH_SUR_LE_SITE_FIFA> & (Pour trouver le lien : https://www.fifa.com/worldcup/matches/#knockoutphase --> puis cliquer sur le match. Exemple d'url : https://www.fifa.com/worldcup/matches/match/300331537/#motm)

### Aggregate_Live /!\ Il vaut mieux attendre quelques minutes avant de la démarrer
1) Aller dans le dossier WorldCup_Dashboard
2) nohup python Aggregate_LIVE.py &


### Aggregate_Timeseries_Joueurs /!\ Voir quand demarrer
1) Aller dans le dossier WorldCup_Dashboard
2) nohup python Aggregate_Timeseries_Joueurs.py &

## Backend Match 2

Faire même étapque que pour match1 mais avec un 2 à la fin de chaque script python.
Exemple : ConsumerKafkaMongo.py devient ConsumerKafkaMongo2.py, loaderKafka.py devient loaderKafka2.py, ...


## Frontend

### base.html
Dé-commenter la balise du nouveau match  (Laptop + Mobile)
Modifier # du /main/ (Laptop + Mobile)

### urls.py
Dé-commenter le match à suivre  

### view.py
Changer MATCH_HASHTAG
##### Main
Dans le main, changer date du match à suivre  
Changer our_tweet
Changer goal_tweet
##### Match view
Décommenter le match de la veille, ajouter les 3 tweets

## Save Data

1) Aller dans le dossier WorldCup_Dashboard

2) vi saverData.py --> changer le hashtag

3) python saverData.py

4) mkdir DjangoWorldCup/worldcup/static/worldcup/data/<MATCH>

5) mv <MATCH>_* DjangoWorldCup/worldcup/static/worldcup/data/<MATCH>/


## Bugs 
### Si bug sur Timeseries_Players 
#### Solution 1 (Si pas 5 joueurs au premier datetime)
1) mongo
2) use WorldCup
3) check pour les datetimes si count = 5 (datetime example : 2018-07-02 17:02:56.538830): db.<MATCHNAME>_Timeseries_Players.find({"Time":"<DATETIME>"}).count()
4) Si count != 5 : db.<MATCHNAME>_Timeseries_Players.remove({"Time":"DATETIME"})

#### Solution 2 (Si pas 5 joueurs à plusieurs datetime)
1) mongo
2) use WorldCup
3) check jusqu'ou les datetimes sont différents de count = 5 (datetime example : 2018-07-02 17:02:56.538830): db.<MATCHNAME>_Timeseries_Players.find({"Time":"<DATETIME>"}).count()
4) On remove tout ce qui est inférieur à la date : db.<MATCHNAME>_Timeseries_Players.remove({"Time":{"$lg":"<DATETIME>"}})
