
import pandas as pd

df = pd.read_csv('web-app-project\orgs_list.csv', encoding = 'utf-8')
rows = df.apply(lambda x: x.tolist(), axis = 1) 
print(rows)
