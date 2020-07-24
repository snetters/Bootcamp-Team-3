from firebase import firebase

firebase = firebase.FirebaseApplication("https://fundflow-team3.firebaseio.com/", None)
#org list is a list of tuples to keep order
data = {
        'name': "Test_User",
        'username': "test_user",
        'org_list': list([["None", 0]]),
        'email': "testing123@gmail.com",
        
        }

result = firebase.post('/fundflow-team3/past_donations', data)
print(result)
