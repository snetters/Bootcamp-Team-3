
import pandas as pd

'''creates a DataFrame from csv file
    The DataFrame can then be indexed by column name (EIN) then row name (name of org) to get data in string form'''

table = pd.read_csv('web-app-project\orgs_list.csv', index_col=0)
#table = df.apply(lambda x: x.tolist()) 
print(table)
print(table.index)
#array = table.to_numpy()
if "Sisters PGH Corp" in table.index:
    print(table["EIN"]["Sisters PGH Corp"])
    print(type(table["EIN"]["Sisters PGH Corp"]))
    print(list(table.index))
