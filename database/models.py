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
    firstName = db.StringField(required=False)
    lastName = db.StringField(required=False)
    countryDetails = db.StringField(required=False)
    cityDetails = db.StringField(required=False)
    contactInfo = db.StringField(required=False)
    about = db.StringField(required=False)

    schoolName = db.StringField(required=False)
    degreeName = db.StringField(required=False)
    fieldOfStudy = db.StringField(required=False)
    schoolStartDate = db.DateTimeField(required=False)
    schoolEndDate =  db.DateTimeField(required=False)
    grade = db.IntField(required=False)

    title = db.StringField(required=False)
    employmentType = db.StringField(required=False)
    companyName = db.StringField(required=False)
    companylocation = db.StringField(required=False)
    companyStartDate = db.DateTimeField(required=False)
    companyEndDate = db.DateTimeField(required=False)
    industryName = db.StringField(required=False)

    skillSelectedOption = db.ListField()
    certificateSelectedOption = db.StringField(required=False)

    educationDetails = db.ListField()
    employmentDetails = db.ListField()

