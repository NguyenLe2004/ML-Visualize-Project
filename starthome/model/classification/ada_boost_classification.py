import numpy as np
from sklearn.ensemble import AdaBoostClassifier
from sklearn.tree import DecisionTreeClassifier
def ada_boost_classify(data,Class,n_estimators,learning_rate ,max_depth  ,min_samples_split , min_samples_leaf ,max_features):
    model = AdaBoostClassifier(estimator=DecisionTreeClassifier(max_depth=max_depth,min_samples_split=min_samples_split,min_samples_leaf=min_samples_leaf,max_features=max_features),n_estimators=n_estimators,learning_rate=learning_rate)
    model.fit(data,Class)
    return model