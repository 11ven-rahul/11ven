from flask import Flask, send_from_directory
from flask_restful import Api
from database.db import initialize_db
from resources.routes import initialize_routes
from flask_bcrypt import Bcrypt

app = Flask(__name__, static_url_path='', static_folder='11ven-signin/build')
api = Api(app)
bcrypt = Bcrypt(app)

app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost/11ven'
}

initialize_db(app)
initialize_routes(api)

@app.route("/")
def serve():
    return send_from_directory(app.static_folder,'index.html')


