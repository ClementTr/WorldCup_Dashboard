from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.http import JsonResponse
import os
# django project name is adleads, replace adleads with your project name
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "adleads.settings")
from .tools import countriesCalculations

def home(request):
    if (request.method == "POST"):
        return redirect("main/")
    return render(request, 'worldcup/home.html')

def data_countries(request):
	data = countriesCalculations("#FRAITA")
	return JsonResponse(data,safe=False)

def data_players(request):
	data = playersCalculations("#FRAITA")
	return JsonResponse(data,safe=False)

def main(request):
    hashtag = "#FRAITA"
    context = {'hashtag': hashtag}
    return render(request, 'worldcup/main.html', context)



# def final(request):
#     hashtag = "#"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/main.html', context)
#
# def third(request):
#     hashtag = "#"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/main.html', context)
#
# def semi_final_2(request):
#     hashtag = "#"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/main.html', context)
#
# def semi_final_1(request):
#     hashtag = "#"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/main.html', context)
#
# def quarter_final_2(request):
#     hashtag = "#"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/main.html', context)
#
# def quarter_final_1(request):
#     hashtag = "#"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/main.html', context)
#
# def round_16_4(request):
#     hashtag = "#"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/main.html', context)
#
# def round_16_3(request):
#     hashtag = "#"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/main.html', context)
#
# def round_16_2(request):
#     hashtag = "#"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/main.html', context)
#
# def round_16_1(request):
#     hashtag = "#"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/main.html', context)
#
# def engbel(request):
#     hashtag = "#ENGBEL"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/engbel.html', context)
#
# def serbra(request):
#     hashtag = "#SERBRA"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/serbra.html', context)
#
# def fraden(request):
#     hashtag = "#FRADEN"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/fraden.html', context)
#
# def spamar(request):
#     hashtag = "#SPAMAR"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/spamar.html', context)
#
# def polcol(request):
#     hashtag = "#POLCOL"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/polcol.html', context)
#
# def gerswe(request):
#     hashtag = "#GERSWE"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/gerswe.html', context)
#
# def bracri(request):
#     hashtag = "#BRACRI"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/bracri.html', context)
#
# def fraper(request):
#     hashtag = "#FRAPER"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/fraper.html', context)
#
# def irnspa(request):
#     hashtag = "#IRNSPA"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/irnspa.html', context)
#
# def rusegy(request):
#     hashtag = "#RUSEGY"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/rusegy.html', context)
#
# def tuneng(request):
#     hashtag = "#TUNENG"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/tuneng.html', context)
#
# def brasui(request):
#     hashtag = "#BRASUI"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/brasui.html', context)
#
# def fraaus(request):
#     hashtag = "#FRAAUS"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/fraaus.html', context)
#
# def porspa(request):
#     hashtag = "#PORSPA"
#     context = {'hashtag': hashtag}
#     return render(request, 'worldcup/porspa.html', context)
#
def rusara(request):
    hashtag = "#RUSARA"
    context = {'hashtag': hashtag}
    return render(request, 'worldcup/rusara.html', context)
