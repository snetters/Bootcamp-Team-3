from flask import Flask, request, jsonify
from firebase import firebase

firebase = firebase.FirebaseApplication("https://fundflow-team3.firebaseio.com/", None)
result = firebase.get("/fundflow-team3/Users", '')

def user_info():
    return result

def get_user_list():
    user_list = []
    for key in result:
        user_list.append(key["username"])
    return user_list

<<<<<<< HEAD
# Can change the route name
@app.route('/backend/create_account', methods=['GET', 'POST'])
=======
>>>>>>> 048e1e82fb2846b9ac7f0bc86776baecb5152d71
def create_account():
    # Assuming the method is post
    # This gets the data sent over from an ajax call (if that's what's being used)
    data = request.get_json()
    # Dictionary values aren't set in stone. Need to change it to what values are sent over from frontend
    if data["password"] != data["confirm_password"]:
<<<<<<< HEAD
        print("Passwords do not match. Please retype")
        return "Passwords do not match. Please retype" #not sure what it should actually return, depends on front end
    else:
        user_list = get_user_list()
        if data["username"] in user_list:
            print("Username is taken. Please enter a different username")
            return "Username is taken. Please enter a different username" #same as password
=======
        # This is just an example of what could be sent back with jsonify
        # Depends on what the backend is
        response = {
            "error": "The password do not match.",
            "success": False
        }
        return jsonify(response=response)
    else:
        user_list = get_user_list()
        if data["username"] in user_list:
            response = {
                "error": "This username is taken. Please enter a new one.",
                "success": False
            }
            return jsonify(response=response)
>>>>>>> 048e1e82fb2846b9ac7f0bc86776baecb5152d71
        else:
            data = {
            'name': name,
            'username': username,
            'password': password,
            'email': email,
            }
            result = firebase.post('/fundflow-team3/Users', data)

<<<<<<< HEAD
=======
            donations_set_up = {
                'name': name, 
                'username': username, 
                'email': email,
                'org_list': list([["None", 0]])
                }

            donations_result = firebase.post('/fundflow-team3/past_donations', donations_set_up)
    # Based on a route to a dashboard that is specific to the user
    return redirect("/dashboard/" + data["username"])

>>>>>>> 048e1e82fb2846b9ac7f0bc86776baecb5152d71
@app.route('/backend/login', methods=['GET', 'POST'])
def login():
    # Assuming the method is post
    # This gets the data sent over from an ajax call (if that's what's being used)
    data = request.get_json()
    user_list = get_user_list()

<<<<<<< HEAD
    # Would you want to check for email as well
=======
    # Would you want to check for email as well? #we can do it as a backup if they forget username
>>>>>>> 048e1e82fb2846b9ac7f0bc86776baecb5152d71
    if data["username"] not in user_list:
        response = {
            "error": "We do not have an account registered under that username",
            "success": False
        }
        return jsonify(response=response)
    else:
        # Does full_dict check everything at once? #full dict gets all the users in our database
        full_dict = user_info()
        if password == full_dict[data["username"]]:
<<<<<<< HEAD
            return redirect("/dashboard") # Or whatever we call the user homepage
=======
            return redirect("/dashboard/" + data["username"]) 
>>>>>>> 048e1e82fb2846b9ac7f0bc86776baecb5152d71
        else:
            response = {
                "error": "The password does not match the password in the system",
                "success": False
            }
            return jsonify(response=response)
<<<<<<< HEAD
=======

>>>>>>> 048e1e82fb2846b9ac7f0bc86776baecb5152d71

# test create_account("Andrea", "andi", "andi101", "andi101", "andrea@gmail.com")

