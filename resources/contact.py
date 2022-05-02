from flask import request
from database.models import Contact_Us
from flask_restful import Resource

class ContactUsApi(Resource):
    def post(self):
        body = request.get_json()
        contact_data = Contact_Us(**body)
        contact_data.save()
        return 200