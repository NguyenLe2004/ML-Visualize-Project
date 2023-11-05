import numpy as np
from sklearn.svm import SVR
from sklearn.preprocessing import StandardScaler, MinMaxScaler
def svr (X,y , kernel : str, c : str , epsilon : str,degree) ->list:
    C = c
    epsilon = float(epsilon)
    if (kernel == "poly") :
        degree = int(degree)
        model = SVR(kernel=kernel,C=C,epsilon=epsilon,degree=degree)
    else :
        model = SVR(kernel=kernel,C=C,epsilon=epsilon)
    model.fit(X,y)
    return model