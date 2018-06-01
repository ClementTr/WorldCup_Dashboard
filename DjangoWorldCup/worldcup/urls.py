from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('main/', views.main, name='main'),
    path('table/', views.table, name='table'),
    path('datacountries/',views.data_countries, name='main')
]
