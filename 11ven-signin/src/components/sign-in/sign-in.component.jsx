import {useState} from 'react';


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
        console.log("submit");
        console.log(email, password);
        event.preventDefault();

        resetFormFields();
    };

    
    const handleChange = event => {
        const {name, value} = event.target;
        console.log(name, value)

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