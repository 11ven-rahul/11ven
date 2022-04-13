import { useState } from 'react';
import axios from 'axios';

import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';


import './sign-up.styles.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {


    await axios.post('http://127.0.0.1:5000/signup',
        {
            "displayName": formFields.displayName,
            "email": formFields.email,
            "password": formFields.password 
        }
    )

    alert("Sign in with your account")

    console.log(JSON.stringify(formFields))
    resetFormFields()
}

    
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Sign Up to create a new account</h2>
      <form>
        <FormInput
          label='First & Last Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <div className='buttons-container' >
          <CustomButton onClick={handleSubmit}>Create a New Account</CustomButton>
        </div>
        
      </form>
    </div>
  );
};

export default SignUp;