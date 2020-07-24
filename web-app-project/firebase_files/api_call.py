from flask import Flask
from flask import request
import get_orgs
import requests
import ast

app = Flask(__name__)

query = "black transmens inc" #would come from requests.args
org_list = get_orgs.org_list()
if query in org_list:
    org_index = org_list.index(query)
    ein = get_orgs.ein_list()[org_index]

    search = "https://projects.propublica.org/nonprofits/api/v2/organizations/" + ein + ".json"
    response = requests.get(search)
    print(response.content)

else:
    response = "We do not have " + query + " in our database \nSorry about that!"
    print(response)

