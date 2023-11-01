import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
def random_forest_regress(X,y,n_estimators ,max_depth  ,min_samples_split , min_samples_leaf ,max_features) :
    if max_depth != "" : 
        max_depth = int(max_depth)
    else : 
        max_depth = None
    model = RandomForestRegressor(n_estimators=n_estimators,max_depth=max_depth,min_samples_leaf=min_samples_leaf,min_samples_split=min_samples_split,max_features=max_features)
    model.fit(X,y)
    return model