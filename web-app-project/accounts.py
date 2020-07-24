from firebase import firebase

firebase = firebase.FirebaseApplication("https://fundflow-team3.firebaseio.com/", None)
result = firebase.get("/fundflow-team3/Users", '')

def user_info():
    return result

def get_user_list():
    user_list = []
    for key in result:
        user_list.append(result[key]["name"])
    return user_list

def create_account(name, username, password, confirm_password, email):
    if password != confirm_password:
        print("Passwords do not match. Please retype")
        return "Passwords do not match. Please retype" #not sure what it should actually return, depends on front end
    else:
        user_list = get_user_list()
        if username in user_list:
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

def login(username, password):
    user_list = get_user_list()
    if username not in user_list:
        print("we do not have an account registered under that username")
    else:
        full_dict = user_info()
        if password == full_dict[username]:
            return True
        else:
            return False

# test create_account("Andrea", "andi", "andi101", "andi101", "andrea@gmail.com")

