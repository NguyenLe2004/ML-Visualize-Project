import numpy as np
from .clustering.kmeans import kmeans_clustering
from .clustering.hierarchi import hierachi_cluster
def train_cluster_model(respond : dict):
    data = np.array(respond.get('list_pos'))
    type_model = respond.get('type')
    if type_model == "1":
        prediction = list(kmeans_clustering(data,respond.get('n_clusters')))
    elif type_model == "2":
        prediction = list(hierachi_cluster(data,respond.get('n_clusters')))
    prediction = [int(pred) for pred in prediction]
    return prediction