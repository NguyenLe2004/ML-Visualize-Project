from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    path('',views.startHome),
    path('regress',views.regress),
    path('classify',views.classify),
    path('cluster',views.cluster),
    path('trainregress/',views.train_regress, name='trainregress'),
    path('trainclassify/',views.train_classify,name='trainclassify'),
    path('traincluster/',views.train_cluster,name='traincluster'),
]