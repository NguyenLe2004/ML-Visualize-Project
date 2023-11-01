import numpy as np
from sklearn.ensemble import RandomForestClassifier
def random_forest_classify(data,Class,n_estimators,max_depth,min_samples_split,min_samples_leaf,max_features):
    model = RandomForestClassifier(n_estimators=n_estimators,min_samples_split=min_samples_split,min_samples_leaf=min_samples_leaf,max_features=max_features)
    model.fit(data,Class)
    return model