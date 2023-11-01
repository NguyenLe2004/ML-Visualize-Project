import numpy as np
from sklearn.neighbors import KNeighborsClassifier
def knn_classify(data,Class, n_neighbors, weights):
    model =KNeighborsClassifier(n_neighbors=n_neighbors,weights=weights)
    model.fit(data,Class)
    return model