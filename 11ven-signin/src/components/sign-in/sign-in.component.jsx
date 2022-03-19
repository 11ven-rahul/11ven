import {useState} from 'react';
import axios from 'axios';


import FormInput from '../../components/form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';


import './sign-in.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',  
};

const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };


    

    const handleSubmit = event => {

        axios.post('http://127.0.0.1:5000/login',
        {
            "email": formFields.email,
            "password": formFields.password 
        }
        )
        .then(response => console.log(response.data))
        .catch(error => console.log(error))

        console.log('Login')
        resetFormFields();
    };

    
    const handleChange = event => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value });
    };
    
    

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your Email and Password</span>

            <form>
                <FormInput
                    name='email' 
                    type="email" 
                    label="Email"
                    handleChange={handleChange} 
                    value={email} 
                    required 
                />
                
                <FormInput 
                    name='password' 
                    type="password" 
                    label="Password"
                    handleChange={handleChange}
                    value={password} 
                    required 
                />
                <div className='buttons-container'>
                    <CustomButton type="button" onClick={handleSubmit} > Sign In </CustomButton>
                    <CustomButton type="button" isGoogleSignIn onClick={handleSubmit}> 
                        Sign In With Google 
                    </CustomButton>
                </div>
            </form>
        </div>
    );

} 

    

    
        
    



export default SignIn;