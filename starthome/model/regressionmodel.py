import numpy as np
from math import sqrt
import warnings
from sklearn.preprocessing import StandardScaler , MinMaxScaler,PolynomialFeatures
from .regression.linear_regression import linear_regress
from .regression.svr_regression import svr
from .regression.knn_regression import knn_regress
from .regression.decision_tree_regression import decision_tree_regress
from .regression.random_forest_regression import random_forest_regress
from .regression.gradient_boost_regression import gradient_boost_regress
from .regression.ada_boost_regression import ada_boost_regress
from .regression.XGBoost_regression import xgboost_regress
from .regression.light_gbm_regression import ligh_gbm_regress
from sklearn.metrics import r2_score,mean_absolute_error,mean_squared_error
warnings.filterwarnings("ignore")
def train_regressor_model(respond:dict) ->list :
    type_model = respond.get('type')
    pos_list = respond.get('pos_list')
    norm = respond.get('norm')
    X = np.array([pos[0] for pos in pos_list]).reshape(-1,1)
    y = np.array([pos[1] for pos in pos_list])
    X_grid = np.arange(0,601,5).reshape(-1,1)
    if (norm != None) :
        if norm == 'standard' :
            scale_x = StandardScaler()
            scale_y = StandardScaler()
        else :
            scale_x = MinMaxScaler()
            scale_y = MinMaxScaler()
        X = scale_x.fit_transform(X)
        y = scale_y.fit_transform(y.reshape(-1, 1)).flatten()
        X_grid = scale_x.transform(X_grid)
    if type_model == "1" :
        if respond.get('isPoly') :
            polynomial = PolynomialFeatures(int(respond.get('degree')))
            X = polynomial.fit_transform(X)
            X_grid = polynomial.fit_transform(X_grid)
        model =  linear_regress(X,y,respond.get('regularize'),float(respond.get('alpha')))
    elif type_model == "2" :
        model =  svr(X,y,respond.get('kernelType'),float(respond.get('C')),float(respond.get('epsilon')),respond.get('degree'))
    elif type_model == "3" :
        model =  knn_regress(X,y,int(respond.get("n_neighbors")),respond.get("weights"))
    elif type_model== "4" :
        model =  decision_tree_regress(X,y,respond.get('max_depth'),int(respond.get("min_samples_split")),int(respond.get("min_samples_leaf")),respond.get("max_features"))
    elif type_model == "5" :
        model = random_forest_regress(X,y,int(respond.get("n_estimators")),respond.get('max_depth'),int(respond.get("min_samples_split")),int(respond.get("min_samples_leaf")),respond.get("max_features"))
    elif type_model == "6":
        model = gradient_boost_regress(X,y,int(respond.get("n_estimators")),float(respond.get("learning_rate")),respond.get('max_depth'),int(respond.get("min_samples_split")),int(respond.get("min_samples_leaf")),respond.get("max_features"))
    elif type_model == "7":
        model = ada_boost_regress(X,y,int(respond.get("n_estimators")),float(respond.get("learning_rate")),respond.get('max_depth'),int(respond.get("min_samples_split")),int(respond.get("min_samples_leaf")),respond.get("max_features"))
    elif type_model == "8":
        model = xgboost_regress(X,y,int(respond.get('max_depth')),int(respond.get("min_child_weight")),float(respond.get("lambda")),float(respond.get("alpha")))
    else :
        model = ligh_gbm_regress(X,y,int(respond.get("n_estimators")),int(respond.get("max_depth")),int(respond.get("min_child_samples")),int(respond.get("num_leaves")),float(respond.get("reg_lambda")),float(respond.get("reg_alpha")))
    prediction = model.predict(X_grid).reshape(-1,1)
    if norm != None:
        prediction = scale_y.inverse_transform(prediction.reshape(-1,1))
    prediction = [float(i[0]) for i in prediction]
    model_pred = model.predict(X)
    r_squared = r2_score(y,model_pred)
    MAE = mean_absolute_error(y,model_pred)
    RMSE = sqrt(mean_squared_error(y,model_pred))
    return [[prediction,float(r_squared)],[float(MAE),float(RMSE)]]