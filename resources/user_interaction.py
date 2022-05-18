from flask import request
from database.models import User   
from flask_restful import Resource
from flask_jwt_extended import jwt_required, get_jwt_identity


class User_Interaction(Resource):
    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        body = request.get_json()
        user = User.objects.get(id=user_id)
        user.update(last_clicked_module = body)
        user.save()
        return 200