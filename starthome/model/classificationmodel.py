import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler, MinMaxScaler
from .classification.logistic_regression import logicstic_regress
from .classification.svc import support_vector_classify
from .classification.knn import knn_classify
from .classification.naive_nayes import gaussnb
from .classification.decision_tree_classification import decision_tree_classify
from .classification.random_forest_classification import random_forest_classify
from .classification.gradient_boost_classification import gradient_boost_classify
from .classification.ada_boost_classification import ada_boost_classify
from .classification.xg_boost_classification import xgb_classify
from .classification.light_gbm_classification import ligh_gbm_classify
def train_classify_model(respond : dict):
    type_model = respond.get('type')
    pos_list = respond.get('pos_list')
    norm = respond.get('norm')
    data = np.array([i[0] for i in respond.get('list_pos')])
    Class = np.array([i[1]-1 for i in respond.get("list_pos")])
    if (norm != None) :
        if norm == 'standard' :
            scale = StandardScaler()
        else :
            scale = MinMaxScaler()
        data = scale.fit_transform(data)
    if type_model == "1" :
        model = logicstic_regress(data,Class,respond.get("penalty"),float(respond.get("tol")),float(respond.get("c")))
    elif type_model == "2":
        model = support_vector_classify(data,Class,respond.get("kernelType"),float(respond.get("c")),int(respond.get("degree")))
    elif type_model == "3":
        model = knn_classify(data,Class,int(respond.get("n_neighbors")),respond.get('weights'))
    elif type_model == "4":
        model = gaussnb(data,Class)
    elif type_model == "5":
        model = decision_tree_classify(data,Class,respond.get('max_depth'),int(respond.get('min_samples_split')),int(respond.get('min_samples_leaf')),respond.get('max_feature'))
    elif type_model == "6":
        model = random_forest_classify(data,Class,respond.get('n_estimators'),respond.get('max_depth'),respond.get('min_samples_split'),respond.get('min_samples_leaf'),respond.get('max_feature'))
    elif type_model == "7":
        model = gradient_boost_classify(data,Class,respond.get('n_estimators'),respond.get('learning_rate'),respond.get('max_depth'),respond.get('min_samples_split'),respond.get('min_samples_leaf'),respond.get('max_feature'))
    elif type_model == "8":
        model = ada_boost_classify(data,Class,respond.get('n_estimators'),respond.get('learning_rate'), respond.get('max_depth'),respond.get('min_samples_split'),respond.get('min_samples_leaf'),respond.get('max_feature'))
    elif type_model == "9":
        model = xgb_classify(data,Class,respond.get('max_depth'),respond.get("min_child_weight"),respond.get("lambda"),respond.get("alpha"))
    else :
        model = ligh_gbm_classify(data,Class,respond.get("n_estimators"),respond.get("max_depth"),respond.get("min_child_samples"),respond.get("num_leaves"),respond.get("reg_lambda"),respond.get("reg_alpha"))
    x,y = np.meshgrid(np.arange(0,601),np.arange(0,501))
    grid = np.c_[x.ravel(),y.ravel()] 
    if norm!=None:
        grid = scale.transform(grid) 
    proba = list(model.predict_proba(grid))
    predict_prob = [float(max(list(prob))) for prob in proba]
    prediction = list(model.predict(grid))
    prediction = [int(pred)for pred in prediction]
    return [prediction,predict_prob]