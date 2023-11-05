import numpy as np
from sklearn.ensemble import AdaBoostRegressor
from sklearn.tree import DecisionTreeRegressor
def ada_boost_regress(X,y,n_estimators,learning_rate ,max_depth  ,min_samples_split , min_samples_leaf ,max_features) :
    if max_depth != "" : 
        max_depth = int(max_depth)
    else : 
        max_depth = None
    model = AdaBoostRegressor(estimator=DecisionTreeRegressor(max_depth=max_depth,min_samples_split=min_samples_split,min_samples_leaf=min_samples_leaf,max_features=max_features),n_estimators=n_estimators,learning_rate=learning_rate)
    model.fit(X,y)
    return model