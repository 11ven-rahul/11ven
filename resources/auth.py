from tracemalloc import start
from flask import request, send_file
from database.models import User, User_profile
from flask_restful import Resource
from flask import Response, request
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from datetime import datetime
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
 
   expires = datetime.timedelta(days=5)
   access_token = create_access_token(identity=str(user.id), expires_delta=expires)
   return {'token': access_token, 'name': user.displayName}, 200

class UserProfileApi(Resource):
  @jwt_required()
  def post(self):
    user_id = get_jwt_identity()
    body = request.get_json()
    user = User.objects.get(id=user_id)
    print(body)
    user_data = User_profile(**body, added_by=user)
    user_data.save()
    exp = 0
    
    
    for emp in user_data.employmentDetails:
      start_date = datetime.strptime(emp['companyStartDate'], '%Y-%m-%d')
      end_date = datetime.strptime(emp['companyEndDate'], '%Y-%m-%d')
      diff = end_date - start_date
      exp = exp + (diff.days + diff.seconds/86400)/365.2425
      
    
    print(type("{:.2f}".format(exp)))
    print("{:.2f}".format(exp))
    user_data.update(experience =  "{:.2f}".format(exp))
    user_data.save()
    user.update(user_profile = user_data)
    user.save()
    return 200

  @jwt_required()
  def get(self):
    user_id = get_jwt_identity()
    profile_data = User_profile.objects.get(added_by=user_id).to_json()
    return Response(profile_data, mimetype="application/json", status=200)

class Upload_File(Resource):
  def post(self):
    file = request.files['file']
    file.save(os.path.join('uploads', file.filename))
    print(file.filename)
    return "done"

  @jwt_required()
  def get(self):
    user_id = get_jwt_identity()
    user_data = User_profile.objects.get(added_by=user_id)
    print(user_data.imageUploadName)
    path = os.getcwd()
    filename = os.path.join(path, f"./uploads/{user_data.imageUploadName}")
    print(filename)
    return send_file(filename, mimetype='image/png')

