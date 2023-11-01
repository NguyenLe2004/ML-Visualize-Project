import numpy as np
from sklearn.svm import SVC
def support_vector_classify(data,Class,kernel,c,degree):
    model = SVC(C=c,kernel=kernel,degree=degree,probability=True)
    model.fit(data,Class)
    return model