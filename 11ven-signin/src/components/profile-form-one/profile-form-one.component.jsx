import './profile-form-one.styles.scss';
import { useState } from 'react';

import FormInputProfile from '../form-input-profile/form-input-profile.component';

import EducationForm from '../education-form/education-form.component';
import EmploymentForm from '../employment-form/employment-form.component';
import FinalStepForm from '../final-step-form/final-step-form.component';
import CustomButton from '../custom-button/custom-button.component';
import Demo from '../avatar-upload/avatar-upload.component';

export const One = ({ formFields, handleChange }) => {

    const {firstName, lastName, countryDetails, cityDetails, contactInfo, about} = formFields;

    return (
        <div className='profile-forms-container'>
            <h2>Personal Details</h2>
             
            
            <form className='form'>
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

                <div className='about-info'>
                    <label className='about-label'>About</label>
                    <textarea 
                        name='about' 
                        type='text'
                        onChange={handleChange}
                        value={about}
                        className='about' 
                        rows={5}>
                    </textarea>
                </div>

                <div className='image-container'>
                    <p>Upload image for Avatar</p>
                    <Demo />
                </div>
            </form>
                
        </div>
       
          
    )
};

export const Two = ({ formFields, handleChange }) => {

    return (
        <div>
            <EducationForm formFields={formFields} handleChange={handleChange} />
            <button>Add another Education field</button> 
        </div>
        
        
    );
};

export const Three = ({ formFields, handleChange }) => {

    


    return (
        <div>
            <EmploymentForm formFields={formFields} handleChange={handleChange} />
            <button>Add another Employment field</button>
        </div>  
    )
};

export const Four = () => {

    
    return (
        <div className='profile-forms-container'>
        <h2>Certifications Related Details</h2> 
        <FinalStepForm />
        </div>  
    )
};


