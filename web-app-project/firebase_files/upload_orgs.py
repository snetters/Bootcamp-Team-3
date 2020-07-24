#valid_username : check to see if a username already exists
#

from firebase import firebase
import pandas as pd

firebase = firebase.FirebaseApplication("https://fundflow-team3.firebaseio.com/", None)

df = pd.read_csv('web-app-project\orgs_list.csv', index_col=0)
table = df.to_numpy()
data = {
    
    "ein_list" : list(table[:, 0]),
    "org_names" : list(df.index)  
    }

result = firebase.post("/fundflow-team3/ai_info", data)

print(result)
