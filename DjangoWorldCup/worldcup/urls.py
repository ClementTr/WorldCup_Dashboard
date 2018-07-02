from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('main/', views.main, name='main'),
    path('table/', views.table, name='table'),
    path('datacountries/',views.data_countries, name='main'),
    path('dataplayers/',views.data_players, name='main'),
    path('data_playersPosition/',views.data_playersPosition, name='main'),
    path('data_positivite/',views.data_positivite, name='main'),
    path('positive_negative/',views.positive_negative, name='main'),
    path('timeseries_players/',views.timeseries_players, name='main'),
    path('score_live/',views.score_live, name='main'),


    # path('final/', views.final, name='final'),
    # path('third/', views.third, name='third'),
    # path('semi_final_2/', views.semi_final_2, name='semi_final_2'),
    # path('semi_final_1/', views.semi_final_1, name='semi_final_1'),
    # path('quarter_final_2/', views.quarter_final_2, name='quarter_final_2'),
    # path('quarter_final_1/', views.quarter_final_1, name='quarter_final_1'),
    # path('round_16_4/', views.round_16_4, name='round_16_4'),
    # path('round_16_3/', views.round_16_3, name='round_16_3'),
    path('croden/', views.croden, name='match'),
    path('sparus/', views.sparus, name='match'),
    path('urupor/', views.urupor, name='match'),
    path('fraarg/', views.fraarg, name='match'),
    path('engbel/', views.engbel, name='poules'),
    path('serbra/', views.serbra, name='poules'),
    path('denfra/', views.denfra, name='poules'),
    path('ururus/', views.ururus, name='poules'),
    path('polcol/', views.polcol, name='poules'),
    path('gerswe/', views.gerswe, name='poules'),
    path('bracrc/', views.bracrc, name='poules'),
    path('fraper/', views.fraper, name='poules'),
    path('uruksa/', views.uruksa, name='poules'),
    path('polsen/', views.polsen, name='poules'),
    path('tuneng/', views.tuneng, name='poules'),
    path('braswi/', views.braswi, name='poules'),
    path('fraaus/', views.fraaus, name='poules'),
    path('porspa/', views.porspa, name='poules'),
    path('rusara/', views.rusara, name='poules')
]
