import './profile-form-one.styles.scss';

import FormInputProfile from '../form-input-profile/form-input-profile.component';



export const One = ({ formFields, handleChange }) => {

    const {firstName, lastName, countryDetails, cityDetails, contactInfo} = formFields;

    return (
        <div className='profile-forms-container'>
            <h2>Personal Details</h2>
             
            <div className='form'>
                <FormInputProfile
                    name='firstName' 
                    type="text" 
                    label="First Name"
                    handleChange={handleChange} 
                    value={firstName} 
                    required 
                />
                <FormInputProfile
                    name='lastName' 
                    type="text" 
                    label="Last Name"
                    handleChange={handleChange} 
                    value={lastName} 
                    required 
                />
                <FormInputProfile
                    name='countryDetails' 
                    type="text" 
                    label="Country/Region"
                    handleChange={handleChange} 
                    value={countryDetails} 
                    required 
                />
                <FormInputProfile
                    name='cityDetails' 
                    type="text" 
                    label="City"
                    handleChange={handleChange} 
                    value={cityDetails} 
                    required 
                />
                <FormInputProfile
                    name='contactInfo' 
                    type="tel" 
                    label="Contact Info"
                    handleChange={handleChange} 
                    value={contactInfo} 
                    required 
                />
            </div>
        </div>
          
    )
};

export const Two = () => {

    return (
        <div className='profile-forms-container'>
            <h2>Education Details</h2>
        </div>  
    )
};

export const Three = () => {

    return (
        <div className='profile-forms-container'>
            <h2>Employment Details</h2>
        </div>  
    )
};

export const Four = () => {

    return (
        <div className='profile-forms-container'>
            <h2>Certifications Related Details</h2>
        </div>  
    )
};


