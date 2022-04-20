from .db import db
from flask_bcrypt import generate_password_hash, check_password_hash



class User(db.Document):
    displayName = db.StringField(required=True)
    email = db.EmailField(required=True, unique=True)
    password = db.StringField(required=True, min_length=6)

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def check_password(self, password):
        return check_password_hash(self.password, password)

class User_profile(db.Document):
    firstName = db.StringField(required=True)
    lastName = db.StringField(required=True)
    countryDetails = db.StringField(required=True)
    cityDetails = db.StringField(required=True)
    contactInfo = db.StringField(required=True)
    about = db.StringField(required=True)

    schoolName = db.StringField(required=True)
    degreeName = db.StringField(required=True)
    fieldOfStudy = db.StringField(required=True)
    schoolStartDate = db.DateTimeField(required=True)
    schoolEndDate =  db.DateTimeField(required=True)
    grade = db.IntField(required=True)

    title = db.StringField(required=True)
    employmentType = db.StringField(required=True)
    companyName = db.StringField(required=True)
    companylocation = db.StringField(required=True)
    companyStartDate = db.DateTimeField(required=True)
    companyEndDate = db.DateTimeField(required=True)
    industryName = db.StringField(required=True)