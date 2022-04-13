from flask import Flask, send_from_directory
from flask_cors import CORS
from flask_restful import Api
from database.db import initialize_db
from resources.routes import initialize_routes
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager

app = Flask(__name__)
CORS(app)
app.config.from_envvar('ENV_FILE_LOCATION')
api = Api(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost/11ven'
}

initialize_db(app)
initialize_routes(api)




