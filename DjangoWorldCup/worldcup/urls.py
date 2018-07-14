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

    #############################################################
    #                                                           #
    #                         FINAL                             #
    #                                                           #
    #############################################################

    #path('fracro/', views.fracro, name='match'),

    #############################################################
    #                                                           #
    #                  PLAY-OFF FOR THIRD PLACE                 #
    #                                                           #
    #############################################################

    #path('beleng/', views.beleng, name='match'),

    #############################################################
    #                                                           #
    #                        SEMI-FINALS                        #
    #                                                           #
    #############################################################

    path('croeng/', views.croeng, name='match'),
    path('frabel/', views.frabel, name='match'),

    #############################################################
    #                                                           #
    #                     QUARTER-FINALS                        #
    #                                                           #
    #############################################################

    path('ruscro/', views.ruscro, name='match'),
    path('sweeng/', views.sweeng, name='match'),
    path('brabel/', views.brabel, name='match'),
    path('urufra/', views.urufra, name='match'),

    #############################################################
    #                                                           #
    #                      ROUND OF 16                          #
    #                                                           #
    #############################################################

    path('coleng/', views.coleng, name='match'),
    path('sweswi/', views.sweswi, name='match'),
    path('beljpn/', views.beljpn, name='match'),
    path('bramex/', views.bramex, name='match'),
    path('croden/', views.croden, name='match'),
    path('sparus/', views.sparus, name='match'),
    path('urupor/', views.urupor, name='match'),
    path('fraarg/', views.fraarg, name='match'),

    #############################################################
    #                                                           #
    #                      GROUP PHASE                          #
    #                                                           #
    #############################################################

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
