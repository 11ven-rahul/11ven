import React from 'react';

import FormInput from '../../components/form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';


import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(){
        super()

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.prevntDefault()

        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { name, value} = event.target;

        this.setState( {[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email' 
                        type="email" 
                        label="Email"
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        required 
                    />
                    
                    <FormInput 
                        name='password' 
                        type="password" 
                        label="Password"
                        handleChange={this.handleChange}
                        value={this.state.password} 
                        required 
                    />
                    <div className='buttons-container'>
                        <CustomButton type="submit" > Sign In </CustomButton>
                        <CustomButton type="submit" isGoogleSignIn> 
                            Sign In With Google 
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }

}

export default SignIn;