# views / "pages" for the app

from flask import render_template #lets us specify html files
from app import app

@app.route('/')
def index():
    return render_template("index.html") #home page, can change name later
@app.route('/login')
def login():
    return render_template('login.html')
@app.route('/newaccount')
def register_user():
    return render_template('newaccount.html')
