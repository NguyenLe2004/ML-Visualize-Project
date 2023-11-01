import numpy as np
from sklearn.preprocessing import MinMaxScaler, StandardScaler
from sklearn.neighbors import KNeighborsRegressor
def knn_regress(X,y, n_neighbors : str, weights : str) -> list:
    n_neighbors = int(n_neighbors)
    model = KNeighborsRegressor(n_neighbors=n_neighbors,weights=weights)
    model.fit(X,y)
    return model