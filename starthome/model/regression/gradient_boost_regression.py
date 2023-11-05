import numpy as np
from sklearn.ensemble import GradientBoostingRegressor
def gradient_boost_regress(X,y,n_estimators,learning_rate ,max_depth  ,min_samples_split , min_samples_leaf ,max_features) :
    if max_depth != "" : 
        max_depth = int(max_depth)
    else : 
        max_depth = None
    model = GradientBoostingRegressor(n_estimators=n_estimators,learning_rate=learning_rate,max_depth=max_depth,min_samples_leaf=min_samples_leaf,min_samples_split=min_samples_split,max_features=max_features)
    model.fit(X,y)
    return model