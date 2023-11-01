from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import requests
from requests.exceptions import RequestException, ConnectionError, JSONDecodeError
from .model.regressionmodel import train_regressor_model
from .model.classificationmodel import train_classify_model
from .model.clusteringmodel import train_cluster_model
# Create your views here.
def startHome(request):
    return render(request,'starthome/starthome.html')
def regress(request):
    return render(request,'starthome/regression.html')
def classify(request):
    return render(request,'starthome/classification.html')
def cluster(request):
    return render(request,'starthome/clustering.html')
@csrf_exempt
def train_regress(request):
    if request.method == 'POST':
        respondData = request.POST.dict()
        respondData = json.loads(list(respondData.keys())[0]) 
        # print(respondData)
        respondData = train_regressor_model(respondData)  
        # print(respondData)
        return JsonResponse({'respondData': respondData}, safe=False) 
@csrf_exempt
def train_classify(request):
    if request.method == 'POST':
        respondData = request.POST.dict()
        respondData = json.loads(list(respondData.keys())[0])
        respondData=train_classify_model(respondData) 
        return JsonResponse({'respondData': respondData}, safe=False)  
@csrf_exempt
def train_cluster(request):
    if request.method == 'POST':
        respondData = request.POST.dict()
        respondData = json.loads(list(respondData.keys())[0])
        respondData = train_cluster_model(respondData)
        return JsonResponse({'respondData': respondData}, safe=False)