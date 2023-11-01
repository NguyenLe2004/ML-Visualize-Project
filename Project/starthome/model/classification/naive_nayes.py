import numpy as np
from sklearn.naive_bayes import GaussianNB
def gaussnb(data,Class):
    model = GaussianNB()
    model.fit(data,Class)
    return model