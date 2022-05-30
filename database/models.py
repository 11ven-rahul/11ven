from .db import db
from flask_bcrypt import generate_password_hash, check_password_hash

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

    resumeUploadName = db.StringField(required=False)
    imageUploadName = db.StringField(required=False)
    added_by = db.ReferenceField('User')
    experience = db.FloatField(required=False)

class User(db.Document):
    displayName = db.StringField(required=False)
    email = db.EmailField(required=False, unique=True)
    password = db.StringField(required=False, min_length=6)

    last_clicked_module = db.DictField(required=False)
    user_profile = db.ReferenceField('User_profile')


    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def check_password(self, password):
        return check_password_hash(self.password, password)





class Contact_Us(db.Document):
    email = db.StringField(required=False)
    helpOption = db.StringField(required=False)
    otherHelp = db.StringField(required=False)

