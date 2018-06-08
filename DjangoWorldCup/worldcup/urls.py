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


    # path('final/', views.final, name='final'),
    # path('third/', views.third, name='third'),
    # path('semi_final_2/', views.semi_final_2, name='semi_final_2'),
    # path('semi_final_1/', views.semi_final_1, name='semi_final_1'),
    # path('quarter_final_2/', views.quarter_final_2, name='quarter_final_2'),
    # path('quarter_final_1/', views.quarter_final_1, name='quarter_final_1'),
    # path('round_16_4/', views.round_16_4, name='round_16_4'),
    # path('round_16_3/', views.round_16_3, name='round_16_3'),
    # path('round_16_2/', views.round_16_2, name='round_16_2'),
    # path('round_16_1/', views.round_16_1, name='round_16_1'),
    # path('engbel/', views.engbel, name='engbel'),
    # path('serbra/', views.serbra, name='serbra'),
    # path('fraden/', views.fraden, name='fraden'),
    # path('spamar/', views.spamar, name='spamar'),
    # path('polcol/', views.polcol, name='polcol'),
    # path('gerswe/', views.gerswe, name='gerswe'),
    # path('bracri/', views.bracri, name='bracri'),
    # path('fraper/', views.fraper, name='fraper'),
    # path('irnspa/', views.irnspa, name='irnspa'),
    # path('rusegy/', views.rusegy, name='rusegy'),
    # path('tuneng/', views.tuneng, name='tuneng'),
    # path('brasui/', views.brasui, name='brasui'),
    # path('fraaus/', views.fraaus, name='fraaus'),
    # path('porspa/', views.porspa, name='porspa'),
    path('rusara/', views.rusara, name='rusara')

]
