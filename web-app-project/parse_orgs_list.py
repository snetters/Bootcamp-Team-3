
import pandas as pd

df = pd.read_csv('web-app-project\orgs_list.csv', index_col=0)
rows = df.apply(lambda x: x.tolist()) 
print(rows)
