# -*- coding: utf-8 -*-
"""
Created on Mon Jul 20 18:36:52 2020

@author: andre
"""

#connecting to the databse
#must have python-firebase installed

from firebase import firebase

firebase = firebase.FirebaseApplication("https://fundflow-team3.firebaseio.com/", None)

data = {
        'name': "Test_User",
        'username': "test_user",
        'password': "testingtesting123",
        'email': "testing123@gmail.com",
        
        }

result = firebase.post('/fundflow-team3/Users', data)