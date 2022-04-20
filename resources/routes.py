from .auth import SignupApi, LoginApi, UserProfileApi


def initialize_routes(api):
    api.add_resource(SignupApi, '/signup')
    api.add_resource(LoginApi, '/login')
    api.add_resource(UserProfileApi, '/userprofile')