import numpy as np
from sklearn.tree import DecisionTreeRegressor
from sklearn.preprocessing import StandardScaler, MinMaxScaler
def decision_tree_regress(X,y,max_depth  ,min_samples_split , min_samples_leaf,max_features ):
    if max_depth != "": 
        max_depth = int(max_depth)
    else :
        max_depth= None
    model = DecisionTreeRegressor(max_depth=max_depth,min_samples_split=min_samples_split,min_samples_leaf=min_samples_leaf,max_features=max_features)
    model.fit(X,y)
    return model