# coding=utf-8

import numpy as np

def distance(feat_arr, index):
    criterion_feat = feat_arr[index]
    ret_list = []
    for i in range(feat_arr.shape[0]):
        result = np.sqrt(np.power(criterion_feat - feat_arr[i], 2).sum())
        ret_list.append(1/(1 + result))
    return ret_list
