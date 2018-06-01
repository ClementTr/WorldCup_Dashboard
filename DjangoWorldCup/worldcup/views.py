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


def main(request):
    hashtag = "#FRAITA"
    context = {'hashtag': hashtag}
    return render(request, 'worldcup/main.html', context)

def table(request):
    return render(request, 'worldcup/table.html')

def data_countries(request):
	data = countriesCalculations()
	return JsonResponse(data,safe=False)
