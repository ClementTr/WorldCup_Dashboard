from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.http import JsonResponse
import os
# django project name is adleads, replace adleads with your project name
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "adleads.settings")
from .tools import countriesCalculations, playersCalculations, players_postCalculations, getPays, getTables, barplot_positivity, positivity_negativity, get_Emojis
MATCH_HASHTAG = '#RUSARA'

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
    country_1, country_2 = getPays(MATCH_HASHTAG)
    emoji = get_Emojis(MATCH_HASHTAG)
    context = {'hashtag': MATCH_HASHTAG, 'country_1': country_1, "country_2": country_2,"emoji":emoji}
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
# def fraper(request):
#     hashtag = "#FRAPER"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def irnspa(request):
#     hashtag = "#IRNSPA"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def rusegy(request):
#     hashtag = "#RUSEGY"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def tuneng(request):
#     hashtag = "#TUNENG"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def brasui(request):
#     hashtag = "#BRASUI"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def fraaus(request):
#     hashtag = "#FRAAUS"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#
# def porspa(request):
#     hashtag = "#PORSPA"
#     country_1, country_2 = getPays(hashtag)
#     context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
#     return render(request, 'worldcup/match.html', context)
#


def rusara(request):
    hashtag = "#RUSARA"
    country_1, country_2 = getPays(hashtag)
    context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2}
    return render(request, 'worldcup/match.html', context)

def frausa(request):
    hashtag = "#FRAUSA"
    country_1, country_2 = getPays(hashtag)
    our_tweet = "<blockquote class='twitter-tweet' data-lang='fr'><p lang='fr' dir='ltr'>Alors ce dernier match avant la Russie ? <a href='https://twitter.com/hashtag/FRAUSA?src=hash&amp;ref_src=twsrc%5Etfw>'#FRAUSA</a> <a href='https://t.co/Dz6hB4Qb0I'>pic.twitter.com/Dz6hB4Qb0I</a></p>&mdash; CLZZ (@clooz2012) <a href='https://twitter.com/clooz2012/status/1005547103802798080?ref_src=twsrc%5Etfw'>9 juin 2018</a></blockquote>"
    rnn_tweet = ""
    context = {'hashtag': hashtag, 'country_1': country_1, "country_2": country_2, "our_tweet": our_tweet, "rnn_tweet": rnn_tweet}
    return render(request, 'worldcup/match.html', context)
