import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
def logicstic_regress(data,Class,penalty,tol,c):
    model = LogisticRegression(penalty=penalty,tol=tol,C=c)
    model.fit(data,Class)
    return model