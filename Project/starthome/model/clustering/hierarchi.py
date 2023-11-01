import numpy as np
from sklearn.cluster import AgglomerativeClustering
def hierachi_cluster(data,n_clusters):
    model = AgglomerativeClustering(n_clusters=n_clusters,distance_threshold=None)
    predict = model.fit_predict(data)
    return predict