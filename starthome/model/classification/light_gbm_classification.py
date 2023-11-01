import pandas as pd
import numpy as np
import lightgbm as lgb
from lightgbm import LGBMClassifier
def ligh_gbm_classify(data,Class,n_estimators,max_depth,min_child_samples,num_leaves,reg_lambda,reg_alpha):
    model = LGBMClassifier(n_estimators=n_estimators,max_depth=max_depth,min_child_samples=min_child_samples,num_leaves=num_leaves,reg_alpha=reg_alpha,reg_lambda=reg_lambda,verbose=-1)
    model.fit(data,Class)
    return model 