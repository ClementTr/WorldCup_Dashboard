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
2) nohup python score.py --url <URL_DU_MATCH_SUR_LE_SITE_TF1> & (Pour trouver le lien : https://www.tf1.fr/tf1/fifa-coupe-du-monde-de-football --> calendrier des matchs puis cliquer sur le match. Exemple d'url : https://www.tf1.fr/dossier/espagne-russie-coupe-du-monde-2018)

### Aggregate_Live /!\ Il vaut mieux attendre quelques minutes avant de la démarrer
1) Aller dans le dossier WorldCup_Dashboard
2) nohup python Aggregate_LIVE.py &


### Aggregate_Timeseries_Joueurs /!\ Voir quand demarrer
1) Aller dans le dossier WorldCup_Dashboard
2) nohup python Aggregate_Timeseries_Joueurs.py &

## Backend Match 2

Faire même étapque que pour match1 mais avec un 2 à la fin de chaque script python.
Exemple : ConsumerKafkaMongo.py devient ConsumerKafkaMongo2.py, loaderKafka.py devient loaderKafka2.py


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


