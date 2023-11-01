import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, MinMaxScaler, PolynomialFeatures
from sklearn.linear_model import LinearRegression, Ridge, Lasso

def linear_regress(X,y,regularize,alpha) -> list:
    if (regularize != None):
        if regularize == 'L1':
            model = Lasso(alpha=alpha,max_iter = 1000)
        else:
            model = Ridge(alpha=alpha,max_iter = 1000)
    else :
        model = LinearRegression()
    
    model.fit(X,y)
    return model