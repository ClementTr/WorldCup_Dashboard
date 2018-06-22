from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.http import JsonResponse
import os
# django project name is adleads, replace adleads with your project name
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "adleads.settings")
from .tools import countriesCalculations, playersCalculations, players_postCalculations, getPays, getTables, barplot_positivity, positivity_negativity, get_Emojis, getEmojisClassement
MATCH_HASHTAG = '#FRAPER'

def home(request):
    if (request.method == "POST"):
        return redirect("main/")
    return render(request, 'worldcup/home.html')

def table(request):
	data = {}
	data['classement'] = getTables()
	return render(request, 'worldcup/table.html',context=data)

def data_countries(request):
	data = countriesCalculations(MATCH_HASHTAG)
	return JsonResponse(data,safe=False)

def data_players(request):
	data = playersCalculations(MATCH_HASHTAG)
	return JsonResponse(data,safe=False)

def data_playersPosition(request):
	keeper_name, keeper_country, defenders_name, defenders_country, midfielders_name, midfielders_country, attackers_name, attackers_country = players_postCalculations(MATCH_HASHTAG)
	return JsonResponse({
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
    },safe=False)


def main(request):
    date = "Friday, June 22th - 14:00"
    country_1, country_2 = getPays(MATCH_HASHTAG)
    emojis = get_Emojis(MATCH_HASHTAG)
    our_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Brazil fans right now 🤣 <a href='https://t.co/JLjRGFJDmx'>pic.twitter.com/JLjRGFJDmx</a></p>&mdash; TLF Videos (@TLFVideos) <a href='https://twitter.com/TLFVideos/status/1010064347945553921?ref_src=twsrc%5Etfw'>22 juin 2018</a></blockquote>"
    goal_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>COUTINHO! WHAT A GOAL! 🔥🔥🔥<a href='https://t.co/EWGlvPCQct'>pic.twitter.com/EWGlvPCQct</a></p>&mdash; World Cup 18 (@WorldCupStuff18) <a href='https://twitter.com/WorldCupStuff18/status/1008415710081617921?ref_src=twsrc%5Etfw'>17 juin 2018</a></blockquote>"
    context = {'hashtag': MATCH_HASHTAG, 'country_1': country_1, "country_2": country_2, "date":date, "our_tweet": our_tweet, "goal_tweet":goal_tweet, "emojis":emojis}
    return render(request, 'worldcup/main.html', context)


def data_positivite(request):
    data = barplot_positivity(MATCH_HASHTAG)
    return JsonResponse(data,safe=False)

def positive_negative(request):
    data = positivity_negativity(MATCH_HASHTAG)
    return JsonResponse(data,safe=False)

# def final(request):
#     hashtag = "#"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def third(request):
#     hashtag = "#"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def semi_final_2(request):
#     hashtag = "#"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def semi_final_1(request):
#     hashtag = "#"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def quarter_final_2(request):
#     hashtag = "#"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def quarter_final_1(request):
#     hashtag = "#"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def round_16_4(request):
#     hashtag = "#"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def round_16_3(request):
#     hashtag = "#"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def round_16_2(request):
#     hashtag = "#"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def round_16_1(request):
#     hashtag = "#"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def engbel(request):
#     hashtag = "#ENGBEL"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def serbra(request):
#     hashtag = "#SERBRA"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def fraden(request):
#     hashtag = "#FRADEN"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def spamar(request):
#     hashtag = "#SPAMAR"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def polcol(request):
#     hashtag = "#POLCOL"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def gerswe(request):
#     hashtag = "#GERSWE"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def bracri(request):
#     hashtag = "#BRACRI"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#

def fraper(request):
    hashtag = "#FRAPER"
    our_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='und' dir='ltr'><a href='https://t.co/FwtY4iudKs'>pic.twitter.com/FwtY4iudKs</a></p>&mdash; Scipion (@Scipionista) <a href='https://twitter.com/Scipionista/status/1009851445410181121?ref_src=twsrc%5Etfw'>21 juin 2018</a></blockquote>"
    goal_tweet = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>⚽️🌎🇫🇷 <a href='https://twitter.com/hashtag/Goal?src=hash&amp;ref_src=twsrc%5Etfw'>#Goal</a> from <a href='https://twitter.com/hashtag/Mbapp%C3%A9?src=hash&amp;ref_src=twsrc%5Etfw'>#Mbappé</a> for <a href='https://twitter.com/hashtag/France?src=hash&amp;ref_src=twsrc%5Etfw'>#France</a> against <a href='https://twitter.com/hashtag/Peru?src=hash&amp;ref_src=twsrc%5Etfw'>#Peru</a> for those who missed it. <a href='https://twitter.com/hashtag/franceperou?src=hash&amp;ref_src=twsrc%5Etfw'>#franceperou</a> <a href='https://twitter.com/hashtag/PERFRA?src=hash&amp;ref_src=twsrc%5Etfw'>#PERFRA</a> <a href='https://twitter.com/hashtag/FRA?src=hash&amp;ref_src=twsrc%5Etfw'>#FRA</a> <a href='https://twitter.com/hashtag/WorldCup2018?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup2018</a> <a href='https://twitter.com/hashtag/WorldCupRussia2018?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCupRussia2018</a> <a href='https://t.co/Ndy4QkZGnK'>pic.twitter.com/Ndy4QkZGnK</a></p>&mdash; Thierry LopezDeArias (@TLopezDeArias) <a href='https://twitter.com/TLopezDeArias/status/1009934891671347201?ref_src=twsrc%5Etfw'>June 21, 2018</a></blockquote>"
    rnn_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>Mbappe est buteur est le plus jeune français à la coupe du monde. <a href='https://twitter.com/hashtag/FRAPER?src=hash&amp;ref_src=twsrc%5Etfw'>#FRAPER</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/DeepLearning?src=hash&amp;ref_src=twsrc%5Etfw'>#DeepLearning</a> <a href='https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw'>#AI</a> <a href='https://t.co/cokD5NMhH7'>pic.twitter.com/cokD5NMhH7</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1010077440989958144?ref_src=twsrc%5Etfw'>22 juin 2018</a></blockquote>"
    date = "Thursday, June 21th - 17:00"
    country_1, country_2 = getPays(hashtag)
    emojis = getEmojisClassement(hashtag[1:])
    context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2,"date":date,"our_tweet": our_tweet, "goal_tweet":goal_tweet, "rnn_tweet": rnn_tweet,"emojis":emojis}
    return render(request, 'worldcup/match.html', context)

def uruksa(request):
    hashtag = "#URUKSA"
    our_tweet = "<blockquote class='twitter-tweet' data-lang='en'><p lang='fr' dir='ltr'>Belle résistance des Saoudiens qui en gardent sous la semelle. <a href='https://twitter.com/hashtag/URUKSA?src=hash&amp;ref_src=twsrc%5Etfw'>#URUKSA</a> <a href='https://t.co/0a9ykRMO7V'>pic.twitter.com/0a9ykRMO7V</a></p>&mdash; Winamax Sport (@WinamaxSport) <a href='https://twitter.com/WinamaxSport/status/1009467268797992960?ref_src=twsrc%5Etfw'>June 20, 2018</a></blockquote>"
    goal_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>📌 <a href='https://twitter.com/hashtag/Uruguay?src=hash&amp;ref_src=twsrc%5Etfw'>#Uruguay</a> 1 - 0 <a href='https://twitter.com/hashtag/SaudiArabia?src=hash&amp;ref_src=twsrc%5Etfw'>#SaudiArabia</a><br><br>Luis Suarez scored the only goal to book Uruguay&#39;s passage to the knockout stages with a game to spare. <a href='https://twitter.com/hashtag/3Sports?src=hash&amp;ref_src=twsrc%5Etfw'>#3Sports</a> <a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a> <a href='https://t.co/bY5esfK4jw'>pic.twitter.com/bY5esfK4jw</a></p>&mdash; #TV3GH (@tv3_ghana) <a href='https://twitter.com/tv3_ghana/status/1009710775668301829?ref_src=twsrc%5Etfw'>21 juin 2018</a></blockquote>"
    rnn_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Suarez actually today show his wife is pregnant <a href='https://twitter.com/hashtag/URUKSA?src=hash&amp;ref_src=twsrc%5Etfw'>#URUKSA</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://t.co/9sXN6HG8sJ'>pic.twitter.com/9sXN6HG8sJ</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1009786850104545280?ref_src=twsrc%5Etfw'>21 juin 2018</a></blockquote>"
    date = "Wednesday, June 20th - 17:00"
    country_1, country_2 = getPays(hashtag)
    emojis = getEmojisClassement(hashtag[1:])
    context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2,"date":date,"our_tweet": our_tweet, "goal_tweet":goal_tweet, "rnn_tweet": rnn_tweet,"emojis":emojis}
    return render(request, 'worldcup/match.html', context)


def polsen(request):
    hashtag = "#POLSEN"
    our_tweet = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>👏 Celebration of the tournament...<a href='https://twitter.com/hashtag/POLSEN?src=hash&amp;ref_src=twsrc%5Etfw'>#POLSEN</a> <a href='https://t.co/AJv1jLqazk'>pic.twitter.com/AJv1jLqazk</a></p>&mdash; The Sportsman (@TheSportsman) <a href='https://twitter.com/TheSportsman/status/1009119501990932482?ref_src=twsrc%5Etfw'>June 19, 2018</a></blockquote>"
    goal_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>The Senegal goal today against Poland 🙈ref waves him on and he intercepts a back pass⚽️ <br><br> <a href='https://t.co/rpCjMu9HKU'>pic.twitter.com/rpCjMu9HKU</a></p>&mdash; Football Away Days (@sportingawayday) <a href='https://twitter.com/sportingawayday/status/1009177311097303040?ref_src=twsrc%5Etfw'>19 juin 2018</a></blockquote>"
    rnn_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Senegal showing great celebration of coach the coolest <a href='https://twitter.com/hashtag/POLSEN?src=hash&amp;ref_src=twsrc%5Etfw'>#POLSEN</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://t.co/5ejxjqU2FM'>pic.twitter.com/5ejxjqU2FM</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1009782113846087680?ref_src=twsrc%5Etfw'>21 juin 2018</a></blockquote>"
    date = "Tuesday, June 19th - 17:00"
    country_1, country_2 = getPays(hashtag)
    emojis = getEmojisClassement(hashtag[1:])
    context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2,"date":date,"our_tweet": our_tweet, "goal_tweet":goal_tweet, "rnn_tweet": rnn_tweet,"emojis":emojis}
    return render(request, 'worldcup/match.html', context)

def tuneng(request):
    hashtag = "#TUNENG"
    our_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>England 😱 <a href='https://t.co/N0zBMDzizd'>pic.twitter.com/N0zBMDzizd</a></p>&mdash; The LAD Football (@TheLADFootball) <a href='https://twitter.com/TheLADFootball/status/1008947073914290176?ref_src=twsrc%5Etfw'>19 juin 2018</a></blockquote>"
    goal_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Everything is better with titanic music <br><br>England  <a href='https://twitter.com/hashtag/ENGTUN?src=hash&amp;ref_src=twsrc%5Etfw'>#ENGTUN</a> <a href='https://t.co/gr2AGaXEqc'>pic.twitter.com/gr2AGaXEqc</a></p>&mdash; Raekwon (@RaekwonJ71) <a href='https://twitter.com/RaekwonJ71/status/1008997894022750208?ref_src=twsrc%5Etfw'>19 juin 2018</a></blockquote>"
    rnn_tweet = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Kane for England celebrating late goal anytime <a href='https://twitter.com/hashtag/TUNENG?src=hash&amp;ref_src=twsrc%5Etfw'>#TUNENG</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://t.co/afnrvka2xW'>pic.twitter.com/afnrvka2xW</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1009052406598885377?ref_src=twsrc%5Etfw'>June 19, 2018</a></blockquote>"
    date = "Monday, June 18th - 17:00"
    country_1, country_2 = getPays(hashtag)
    emojis = getEmojisClassement(hashtag[1:])
    context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2,"date":date,"our_tweet": our_tweet, "goal_tweet":goal_tweet, "rnn_tweet": rnn_tweet,"emojis":emojis}
    return render(request, 'worldcup/match.html', context)
#
def braswi(request):
    hashtag = "#BRASWI"
    our_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>When Neymar was in school<br>(🎥:  <a href='https://twitter.com/kennynobrega?ref_src=twsrc%5Etfw'>@kennynobrega</a> )<a href='https://t.co/XQ8Ky418IH'>https://t.co/XQ8Ky418IH</a></p>&mdash; Troll Football Media (@Troll__Footbal) <a href='https://twitter.com/Troll__Footbal/status/1008436596809654274?ref_src=twsrc%5Etfw'>17 juin 2018</a></blockquote>"
    goal_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>le Golazoooooode <a href='https://twitter.com/Phil_Coutinho?ref_src=twsrc%5Etfw'>@Phil_Coutinho</a>, quel monstre 🇧🇷🔥 <a href='https://t.co/chAgB3iAyn'>pic.twitter.com/chAgB3iAyn</a></p>&mdash; Visca Barça (@ViscaBarca_FR) <a href='https://twitter.com/ViscaBarca_FR/status/1008417839160741890?ref_src=twsrc%5Etfw'>17 juin 2018</a></blockquote>"
    rnn_tweet = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Coutinho scores screamers like a replay <a href='https://twitter.com/hashtag/BRASWI?src=hash&amp;ref_src=twsrc%5Etfw'>#BRASWI</a> <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://t.co/aK8WzrhZ2m'>pic.twitter.com/aK8WzrhZ2m</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1009047499083075584?ref_src=twsrc%5Etfw'>June 19, 2018</a></blockquote>"
    date = "Sunday, June 17th - 20:00"
    country_1, country_2 = getPays(hashtag)
    emojis = getEmojisClassement(hashtag[1:])
    context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2,"date":date,"our_tweet": our_tweet, "goal_tweet":goal_tweet, "rnn_tweet": rnn_tweet,"emojis":emojis}
    return render(request, 'worldcup/match.html', context)


def fraaus(request):
    hashtag = "#FRAAUS"
    our_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>Ne blâmez pas Umtiti, il a échappé 3 fois à la mort sur le terrain, ça laisse des traces.  <a href='https://twitter.com/hashtag/FRAAUS?src=hash&amp;ref_src=twsrc%5Etfw'>#FRAAUS</a> <a href='https://t.co/gdFRmICAEb'>pic.twitter.com/gdFRmICAEb</a></p>&mdash; Nicky Lahcene (@NickyLahcene) <a href='https://twitter.com/NickyLahcene/status/1007965148030685185?ref_src=twsrc%5Etfw'>16 juin 2018</a></blockquote>"
    goal_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'><a href='https://twitter.com/paulpogba?ref_src=twsrc%5Etfw'>@paulpogba</a> helped France team to lead 1st victory in 2018 world cup gorgeous chip by Paul Pogba which hit the frame of the goal and crossed the line which gave 2-1 lead to France. <a href='https://twitter.com/hashtag/FRA?src=hash&amp;ref_src=twsrc%5Etfw'>#FRA</a> <a href='https://twitter.com/hashtag/AUS?src=hash&amp;ref_src=twsrc%5Etfw'>#AUS</a> <a href='https://twitter.com/hashtag/mufc?src=hash&amp;ref_src=twsrc%5Etfw'>#mufc</a> <a href='https://twitter.com/hashtag/PaulPogba?src=hash&amp;ref_src=twsrc%5Etfw'>#PaulPogba</a> <a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a> <a href='https://twitter.com/hashtag/FRAAUS?src=hash&amp;ref_src=twsrc%5Etfw'>#FRAAUS</a> <a href='https://t.co/aYhppXq6kE'>pic.twitter.com/aYhppXq6kE</a></p>&mdash; Unitereddevils (@Unite_Reddevils) <a href='https://twitter.com/Unite_Reddevils/status/1008026582877900802?ref_src=twsrc%5Etfw'>16 juin 2018</a></blockquote>"
    rnn_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>Umtiti s’est cru au basket avec la VAR de la main <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/FRAAUS?src=hash&amp;ref_src=twsrc%5Etfw'>#FRAAUS</a> <a href='https://t.co/PaQ3vvOuEP'>pic.twitter.com/PaQ3vvOuEP</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1008287583091163136?ref_src=twsrc%5Etfw'>17 juin 2018</a></blockquote>"
    date = "Saturday, June 16th - 12:00"
    country_1, country_2 = getPays(hashtag)
    emojis = getEmojisClassement(hashtag[1:])
    context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2,"date":date,"our_tweet": our_tweet, "goal_tweet":goal_tweet, "rnn_tweet": rnn_tweet,"emojis":emojis}
    return render(request, 'worldcup/match.html', context)
#
def porspa(request):
    hashtag = "#PORSPA"
    our_tweet = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>Cristiano Ronaldo records today:<br><br>🔥 First player EVER to score in 8 consecutive major tournament<br>⭐️ Second highest goalscorer ever for any country<br>💪🏼 Oldest player EVER to score a hat-trick at the World Cup<br>🙌🏼 Fourth player to score in 4 World Cups<br><br>G.O.A.T. 👑🐐 <a href='https://t.co/cxX5BfnnNu'>pic.twitter.com/cxX5BfnnNu</a></p>&mdash; Futbol Stuff (@FutboIStuff) <a href='https://twitter.com/FutboIStuff/status/1007727337541169153?ref_src=twsrc%5Etfw'>June 15, 2018</a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>"
    goal_tweet = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>These are kind of people did Physics &amp; Mathematics perfect short perfect curving the ball excellent to <a href='https://twitter.com/hashtag/Nacho?src=hash&amp;ref_src=twsrc%5Etfw'>#Nacho</a> <a href='https://twitter.com/hashtag/PORxESP?src=hash&amp;ref_src=twsrc%5Etfw'>#PORxESP</a><a href='https://twitter.com/hashtag/PORESP?src=hash&amp;ref_src=twsrc%5Etfw'>#PORESP</a> <a href='https://twitter.com/hashtag/GainwithSmartleoH?src=hash&amp;ref_src=twsrc%5Etfw'>#GainwithSmartleoH</a> <a href='https://twitter.com/hashtag/Russia2018?src=hash&amp;ref_src=twsrc%5Etfw'>#Russia2018</a> <a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a> <a href='https://twitter.com/hashtag/Russia2018WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#Russia2018WorldCup</a> <a href='https://twitter.com/hashtag/WorldCupRussia2018?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCupRussia2018</a> <a href='https://twitter.com/hashtag/NTVBudgetDialogue18?src=hash&amp;ref_src=twsrc%5Etfw'>#NTVBudgetDialogue18</a> <a href='https://twitter.com/hashtag/K24Russia2018?src=hash&amp;ref_src=twsrc%5Etfw'>#K24Russia2018</a> <a href='https://twitter.com/hashtag/PortugalVsSpain?src=hash&amp;ref_src=twsrc%5Etfw'>#PortugalVsSpain</a> <a href='https://t.co/LceZURxLBT'>pic.twitter.com/LceZURxLBT</a></p>&mdash; SmartleoH (@SmartleoH) <a href='https://twitter.com/SmartleoH/status/1007706115000406017?ref_src=twsrc%5Etfw'>June 15, 2018</a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>"
    rnn_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Ronaldo is the goat perfectly the best in the world <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/PORSPA?src=hash&amp;ref_src=twsrc%5Etfw'>#PORSPA</a> <a href='https://t.co/aARv2LWZSW'>pic.twitter.com/aARv2LWZSW</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1007906563405811712?ref_src=twsrc%5Etfw'>16 juin 2018</a></blockquote>"
    date = "Friday, June 15th - 20:00"
    country_1, country_2 = getPays(hashtag)
    emojis = getEmojisClassement(hashtag[1:])
    context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2,"date":date,"our_tweet": our_tweet, "goal_tweet":goal_tweet, "rnn_tweet": rnn_tweet,"emojis":emojis}
    return render(request, 'worldcup/match.html', context)


def rusara(request):
    hashtag = "#RUSARA"
    our_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>Ça chambre déjà... <a href='https://twitter.com/hashtag/Rusia2018?src=hash&amp;ref_src=twsrc%5Etfw'>#Rusia2018</a> <a href='https://twitter.com/hashtag/RUSKSA?src=hash&amp;ref_src=twsrc%5Etfw'>#RUSKSA</a> <a href='https://t.co/pavhBqMbiV'>pic.twitter.com/pavhBqMbiV</a></p>&mdash; Nabil Djellit (@Nabil_djellit) <a href='https://twitter.com/Nabil_djellit/status/1007308770186354688?ref_src=twsrc%5Etfw'>14 juin 2018</a></blockquote>"
    goal_tweet = "<blockquote class='twitter-tweet' data-lang='en'><p lang='en' dir='ltr'>This Goal by <a href='https://twitter.com/Cheryshev?ref_src=twsrc%5Etfw'>@Cheryshev</a> 🇷🇺!! gives Russia a 4 Goal lead in the Extra Time. That was Fabulous!! 😍👏🙌<a href='https://twitter.com/hashtag/WorldCup?src=hash&amp;ref_src=twsrc%5Etfw'>#WorldCup</a> <a href='https://twitter.com/hashtag/Rusia2018?src=hash&amp;ref_src=twsrc%5Etfw'>#Rusia2018</a> <a href='https://twitter.com/hashtag/RUSKSA?src=hash&amp;ref_src=twsrc%5Etfw'>#RUSKSA</a><br><br>Credits - <a href='https://twitter.com/FIFAWorldCup?ref_src=twsrc%5Etfw'>@FIFAWorldCup</a> <a href='https://t.co/DhQBch6Yn9'>pic.twitter.com/DhQBch6Yn9</a></p>&mdash; Saurabh Kahadane (@SKahadane) <a href='https://twitter.com/SKahadane/status/1007564242499919872?ref_src=twsrc%5Etfw'>June 15, 2018</a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>"
    rnn_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='en' dir='ltr'>Golovin to make it perfect is again a goal <a href='https://twitter.com/hashtag/RNN?src=hash&amp;ref_src=twsrc%5Etfw'>#RNN</a> <a href='https://twitter.com/hashtag/RUSKSA?src=hash&amp;ref_src=twsrc%5Etfw'>#RUSKSA</a></p>&mdash; DataDeer (@DataDeer_) <a href='https://twitter.com/DataDeer_/status/1007905063401123841?ref_src=twsrc%5Etfw'>16 juin 2018</a></blockquote>"
    date = "Thursday, June 14th - 17:00"
    emojis = getEmojisClassement(hashtag[1:])
    country_1, country_2 = getPays(hashtag)
    context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2, "our_tweet": our_tweet, "rnn_tweet": rnn_tweet,"goal_tweet":goal_tweet,"date":date,"emojis":emojis}
    return render(request, 'worldcup/match.html', context)
