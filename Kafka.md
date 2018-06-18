# Kafka

## List topics
kafka-topics.sh --zookeeper localhost:2181 --list

## Delete topic
kafka-topics.sh --zookeeper localhost:2181 --delete --topic WorldCup

## List topics
kafka-topics.sh --zookeeper localhost:2181 --list

## Create topic
kafka-topics.sh --zookeeper localhost:2181 --create --topic WorldCup --partitions 1 --replication-factor 1

## List topics
kafka-topics.sh --zookeeper localhost:2181 --list


## Count number of messages in topic (info)
kafka-run-class.sh kafka.tools.GetOffsetShell --broker-list localhost:9092 --topic WorldCup --time -1 --offsets 1 | awk -F ":" '{sum += $3} END {print sum}'

