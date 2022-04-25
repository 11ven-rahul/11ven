from unicodedata import name
from flask import request
from database.models import User, User_profile
from flask_restful import Resource
from flask import Response, request
from flask_jwt_extended import create_access_token
from flask_cors import cross_origin
import datetime
import os


class SignupApi(Resource):
 def post(self):
   body = request.get_json()
   user = User(**body)
   user.hash_password()
   user.save()
   id = user.id
   return {'id': str(id)}, 200

class LoginApi(Resource):
 def post(self):
   body = request.get_json()
   user = User.objects.get(email=body.get('email'))
   authorized = user.check_password(body.get('password'))
   if not authorized:
     return {'error': 'Email or password invalid'}, 401
 
   expires = datetime.timedelta(days=1)
   access_token = create_access_token(identity=str(user.id), expires_delta=expires)
   return {'token': access_token, 'name': user.displayName}, 200

class UserProfileApi(Resource):
  def post(self):
    body = request.get_json()
    print(body)
    user_data = User_profile(**body)
    user_data.save()
    return 200

class Upload_File(Resource):
  def post(self):
    file = request.files['file']
    file.save(os.path.join('uploads', file.filename))
    print(file.filename)
    return "done"

