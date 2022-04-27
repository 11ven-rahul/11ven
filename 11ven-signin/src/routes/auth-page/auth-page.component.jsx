import { useState } from "react";

import { ReactComponent as Logo } from '../../assets/PSC_Logo.svg';

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import './auth-page.styles.scss'

const AuthPage = () => {

    const [pageState, setPageState] = useState(false)

    return(
    <div className="auth-page">
        <div className="logo-container">
            <Logo className="logo" />
        </div>

        <h2>For Developers</h2>
        <p>Practice coding, prepare for interviews, and get hired</p>
        <div className="auth-box">
            <div className="box-nav-bar">
                <div className={`${pageState?'':'active-signup'} option`}
                    onClick={() => { pageState ? setPageState(!pageState) : setPageState(pageState); console.log(pageState)}}
                >
                    Sign up
                </div>
                <div className={`${!pageState?'':'active-signin'} option`}
                    onClick={() => {!pageState ? setPageState(!pageState) : setPageState(pageState); console.log(pageState)}}
                >
                    Log in
                </div>
            </div>
            <div className="form-container">
                {
                    pageState ?
                    <SignIn />
                    :
                    <SignUp />
                }
            </div>
            <div className="social-login-label">
                <div className="line"></div>
                <span className="label-text">or connect with</span>
            </div>
            <div className="google-button">
                <CustomButton buttonType="google">Sign in with Google</CustomButton>
            </div>
            
        </div>
    </div>
    )
    
}

export default AuthPage