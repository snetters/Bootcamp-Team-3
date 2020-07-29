#use if user answers yes that they donated after opening link
#follow up questions should be amount

from firebase import firebase
firebase = firebase.FirebaseApplication("https://fundflow-team3.firebaseio.com/", None)


result = firebase.get("/fundflow-team3/past_donations", '')

#data = requests.json() # should contain username, amount donated, and org

#test
username = "test_user"
amount = 100
org = "NAACP"

def get_donations(username):
    for key in result:
        if result[key]["username"] ==  username:
            return key
        #user has to already be in our database



def update_donations(amount, org):
    #data = requests.json()
    key = get_donations(username)
    previous_donations = result[key]["org_list"]
    if len(previous_donations) == 1 and previous_donations[0][0] == "None":
       first_donation = list([[org, amount]])
       update_dict = firebase.put("/fundflow-team3/past_donations/" + key, "org_list", first_donation )
    else:
        new_donation = previous_donations.append([org, amount])
        update_dict = firebase.put("/fundflow-team3/past_donations/" + key, "org_list", new_donation )




final = update_donations(amount, org)
print(final)