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

# Can change the route name
@app.route('/backend/create_account', methods=['GET', 'POST'])
def create_account():
    # Assuming the method is post
    # This gets the data sent over from an ajax call (if that's what's being used)
    data = request.get_json()
    # Dictionary values aren't set in stone. Need to change it to what values are sent over from frontend
    if data["password"] != data["confirm_password"]:
        print("Passwords do not match. Please retype")
        return "Passwords do not match. Please retype" #not sure what it should actually return, depends on front end
    else:
        user_list = get_user_list()
        if data["username"] in user_list:
            print("Username is taken. Please enter a different username")
            return "Username is taken. Please enter a different username" #same as password
        else:
            data = {
            'name': name,
            'username': username,
            'password': password,
            'email': email,
        
            }
            result = firebase.post('/fundflow-team3/Users', data)
            print(result)

@app.route('/backend/login', methods=['GET', 'POST'])
def login():
    # Assuming the method is post
    # This gets the data sent over from an ajax call (if that's what's being used)
    data = request.get_json()
    user_list = get_user_list()

    # Would you want to check for email as well
    if data["username"] not in user_list:
        response = {
            "error": "We do not have an account registered under that username",
            "success": False
        }
        return jsonify(response=response)
    else:
        full_dict = user_info()
        if password == full_dict[data["username"]]:
            return redirect("/dashboard") # Or whatever we call the user homepage
        else:
            response = {
                "error": "The password does not match the password in the system",
                "success": False
            }
            return jsonify(response=response)

# test create_account("Andrea", "andi", "andi101", "andi101", "andrea@gmail.com")

