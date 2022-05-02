import { useState } from 'react';
import './contact.styles.scss';

import { ReactComponent as Logo } from '../../assets/PSC_Logo.svg'
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import FormInputProfile from '../../components/form-input-profile/form-input-profile.component';
import Select from 'react-select';
import CustomButton from '../../components/custom-button/custom-button.component';
import axios from 'axios';

const contactOptions = [
    { value: 'Select the best fit option...', label: 'Select the best fit option...'},
    { value: 'Chat with sales', label: 'Chat with sales' },
    { value: 'Get Support with my subscription', label: 'Get Support with my subscription' },
    { value: 'Join PSC Community', label: 'Join PSC Community' },
    { value: 'Inquire about a Partnership', label: 'Inquire about a Partnership' },
    { value: 'Submit a media inquiry', label: 'Submit a media inquiry' },
    { value: 'Other', label: 'Other' },
    ]


const defaultFormFields = {
    email: '',
    helpOption: 'Select the best fit option...',
    otherHelp: ''  
};
const Contact = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, helpOption, otherHelp} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleChange = event => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const handleOptionChange = (e) => {
        const { value } = e;
        setFormFields({ ...formFields, helpOption: value  });
        console.log(helpOption)  
    }

    const handleSubmit = async (event) => {
        console.log(JSON.stringify(formFields))
        await axios.post('http://127.0.0.1:5000/contact', JSON.stringify(formFields), {headers: { 'Content-Type':'application/json'}})
        .then(res => console.log(res))
        .catch(error => console.log(error));

        resetFormFields();
    }
    
    
    const colourStyles = {
        control: styles => ({ ...styles, 
            backgroundColor: '#f3f7f7',
            boxShadow: "inset 0 1px 4px #E5E5E5",
            border: "none",
            borderRadius: "0",
            cursor: "pointer",
            width: "300px",
            color: "#39424e",     
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            backgroundColor: isFocused ? 'white' : '#f3f7f7',
            color: '#39424e',
            cursor: "pointer", 
          };
        },
        
      };
    return (
        <div className='contact-page-container'>
            <div className='main-contact'>
                <div className='column-display-box' >
                    <div className='row-flex-contact'>
                        <Link className='contact-brand-logo' to='/'>
                            <Logo className='contact-logo' />
                        </Link>
                        <div  className='contact-number-display'>
                            <p>Contact: India</p>
                            <a href='tel: +91 999999999'>
                                <span style={{color: "#39424e"}}>+91 9945216424</span>
                            </a>
                        </div>
                    </div>
                    <div className='contact-page-content'>
                        <h2 style={{color: "#39424e", fontSize: "42px", fontWeight: "400",}}>Contact Us</h2>
                        <h4 style={{fontWeight: "450", fontSize: "16px"}}>
                        Looking for help to get started, or stuck somewhere?
                        </h4>
                        <p style={{color: "#637681"}}>Get in touch with a PSC representative who can assist you <br /> to solve any issue you are facing</p>
                    </div>
                </div>
                <div className='contact-input-box'>
                <form>
                    <FormInputProfile
                        name='email' 
                        type="text" 
                        label="Email"
                        handleChange={handleChange} 
                        value={email} 
                        required 
                    />
                    <div className='help-option-dropdown'>
                        <label style={{marginLeft: "5px"}}>How can we help you?</label>
                        <Select 
                            name='helpOption'
                            placeholder="Select the best fit option..."
                            styles={colourStyles} 
                            options={contactOptions}
                            value={contactOptions.find(obj => obj.value === helpOption)}
                            onChange={handleOptionChange}
                        />
                    </div>
                    {
                        helpOption === "Other" ? (
                            <div className='conditional-help-info'>
                                <label className='conditional-help-label'>Please describe how we can help you:</label>
                                <textarea
                                name='otherHelp' 
                                type='text'
                                onChange={handleChange}
                                value={otherHelp}
                                className='conditional-help' 
                                rows={2}>
                                </textarea>
                            </div>
                            
                        )
                        :
                        null
                    }
                    <div className='contact-submit'> 
                        <CustomButton type="button" onClick={handleSubmit}>Contact Us</CustomButton>
                    </div>
                    <p style={{
                        color: "#738f93",
                        position: "relative",
                        left: "50px",
                        top: "20px",
                    }}>By submitting this form you agree to our <em style={{color: "black"}}>privacy policy</em></p>
                </form>
                
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;