import numpy as np
from sklearn.cluster import KMeans
def kmeans_clustering(data,n_clusters):
    model = KMeans(n_clusters=n_clusters)
    predict = model.fit_predict(data)
    return predict 