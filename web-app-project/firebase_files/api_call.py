from flask import Flask
from flask import request
import get_orgs
import requests
import ast

app = Flask(__name__)

query = "black transmens inc" #would come from requests.args

@app.route('/backend/search', methods=['GET', 'POST'])
def search_data():

    #org_list = get_orgs.org_list()
 # Gets value of term user sent in
    if request.method == "POST":
        json_data = request.get_json()
        search_term = json_data["search_term"]

        org_index = get_orgs.org_list().index(search_term)
        ein = get_orgs.ein_list()[org_index]

        # Might not need an API call for regular search if we're going to direct them to a page on our site
        # Still need to look into that
        search = "https://projects.propublica.org/nonprofits/api/v2/organizations/" + ein + ".json"
        response = requests.get(search)


    return true;

@app.route('/backend/get_pdf', methods=['GET', 'POST'])
def search_data():

    # Gets value of term user sent in
    if request.method == "POST":
        json_data = request.get_json()
        search_term = json_data["search_term"]

        org_index = get_orgs.org_list().index(search_term)
        ein = get_orgs.ein_list()[org_index]

        search = "https://projects.propublica.org/nonprofits/api/v2/organizations/" + ein + ".json"
        response = requests.get(search)
        

    return redirect(response.json()["filings_with_data"]["pdf_url"]);

