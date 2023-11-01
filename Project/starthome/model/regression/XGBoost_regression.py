import numpy as np
import pandas as pd
from xgboost import XGBRegressor
def xgboost_regress(X,y,max_depth,min_child_weight,reg_lambda,alpha):
    model = XGBRegressor(max_depth=max_depth,min_child_weight=min_child_weight,reg_lambda = reg_lambda,alpha=alpha)
    model.fit(X,y)
    return model