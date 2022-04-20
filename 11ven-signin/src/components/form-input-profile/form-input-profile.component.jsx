import React from 'react';


import './form-profile.style.scss'

const FormInputProfile = ({ isUserProfile, handleChange, label, ...otherProps}) => (
    <div className={`${isUserProfile?'user-profile' : ''} group`}>
        
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label ?
            (<label className={`form-input-label`}>
                {label}
            </label>)
            : null
        }  
    </div>
)

export default FormInputProfile;