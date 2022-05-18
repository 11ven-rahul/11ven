import {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


import FormInput from '../../components/form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';
import { UserContext } from '../../contexts/user.context';


import './sign-in.styles.scss';


const defaultFormFields = {
    email: '',
    password: '',  
};

const SignIn = () => {
    const navigate = useNavigate()

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const { setCurrentUser, currentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };


    

    const handleSubmit = async event => {

        await axios.post('http://127.0.0.1:5000/login',
        {
            "email": formFields.email,
            "password": formFields.password 
        }
        )
        .then(response => {console.log(response.data); setCurrentUser(response.data); localStorage.setItem("user_data",JSON.stringify(response.data));})   
        .catch(error => console.log(error))
        console.log((JSON.parse(localStorage.getItem("user_data"))).token)
        navigate('/dashboard');
        resetFormFields();
    };

    
    const handleChange = event => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value });
    };
    
    

    return (
        <div className='sign-in'>
            <h2>Login in with your Email and Password</h2>

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
                </div>
            </form>
        </div>
    );

} 

    

    
        
    



export default SignIn;