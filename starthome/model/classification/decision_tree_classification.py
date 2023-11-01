import numpy as np
from sklearn.tree import DecisionTreeClassifier
def decision_tree_classify(data,Class,max_depth,min_samples_split,min_samples_leaf,max_features):
    model = DecisionTreeClassifier(max_depth=max_depth,min_samples_leaf=min_samples_leaf,min_samples_split=min_samples_split,max_features=max_features)
    model.fit(data,Class)
    return model