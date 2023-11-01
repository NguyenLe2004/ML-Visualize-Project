import numpy as np
from sklearn.ensemble import GradientBoostingClassifier
def gradient_boost_classify(data,Class,n_estimators,learning_rate ,max_depth  ,min_samples_split , min_samples_leaf ,max_features):
    model = GradientBoostingClassifier(n_estimators=n_estimators,learning_rate=learning_rate,max_depth=max_depth,min_samples_leaf=min_samples_leaf,min_samples_split=min_samples_split,max_features=max_features)
    model.fit(data,Class)
    return model