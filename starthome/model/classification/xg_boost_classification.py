import numpy as np
from xgboost import XGBClassifier
def xgb_classify(data,Class,max_depth,min_child_weight,reg_lambda,alpha):
    model = XGBClassifier(max_depth=max_depth,min_child_weight=min_child_weight,reg_lambda = reg_lambda,alpha=alpha)
    model.fit(data,Class)
    return model