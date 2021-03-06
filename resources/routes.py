from .auth import SignupApi, LoginApi, UserProfileApi, Upload_File
from .contact import ContactUsApi
from .user_interaction import User_Interaction


def initialize_routes(api):
    api.add_resource(SignupApi, '/signup')
    api.add_resource(LoginApi, '/login')
    api.add_resource(UserProfileApi, '/userprofile')
    api.add_resource(Upload_File, '/upload')
    api.add_resource(ContactUsApi, '/contact')
    api.add_resource(User_Interaction, '/user_interaction')
