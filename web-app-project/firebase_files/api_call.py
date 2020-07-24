from flask import Flask
from flask import request
import get_orgs
import requests
import ast

app = Flask(__name__)

query = "black transmen inc" #would come from requests.args

org_index = get_orgs.org_list().index(query)
ein = get_orgs.ein_list()[org_index]

search = "https://projects.propublica.org/nonprofits/api/v2/organizations/" + ein + ".json"
response = requests.get(search)
print(response.content)

