from firebase import firebase
import pandas as pd

firebase = firebase.FirebaseApplication("https://fundflow-team3.firebaseio.com/", None)

df = pd.read_csv('web-app-project\orgs_list.csv', index_col=0)
result = firebase.get("/fundflow-team3/ai_info", '')
def org_list():
    org_names = result[list(result.keys())[0]]["org_names"]
    #print(org_names)
    return org_names
org_list()

def ein_list():
    ein_list = result[list(result.keys())[0]]["ein_list"]
    #print(ein_list)
    return ein_list

org_list()
ein_list()


