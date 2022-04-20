import './education-form.styles.scss';

import FormInputProfile from '../form-input-profile/form-input-profile.component';

const EducationForm = ({ formFields, handleChange }) => {

    const { schoolName, degreeName, fieldOfStudy, schoolStartDate, schoolEndDate, grade } = formFields;
    return (
        <div className='profile-forms-container'>
            <h2>Education Details</h2>
            <form className='form'> 
                <FormInputProfile
                    name='schoolName' 
                    type="text" 
                    label="School"
                    handleChange={handleChange} 
                    value={schoolName} 
                    required 
                /> 

                <FormInputProfile
                    name='degreeName' 
                    type="text" 
                    label="Degree"
                    handleChange={handleChange} 
                    value={degreeName} 
                    required 
                /> 

                <FormInputProfile
                    name='fieldOfStudy' 
                    type="text" 
                    label="Field of Study"
                    handleChange={handleChange} 
                    value={fieldOfStudy} 
                    required 
                />

                <FormInputProfile
                    name='grade' 
                    type="number" 
                    label="Grade"
                    handleChange={handleChange} 
                    value={grade} 
                    min='0'
                    max='100'
                    required 
                />

                <FormInputProfile
                    name='schoolStartDate' 
                    type="date" 
                    label="Start Date"
                    handleChange={handleChange} 
                    value={schoolStartDate} 
                    required 
                />

                <FormInputProfile
                    name='schoolEndDate' 
                    type="date" 
                    label="End Date"
                    handleChange={handleChange} 
                    value={schoolEndDate} 
                    required 
                />
            </form>  
        </div>  
    )
};

export default EducationForm;