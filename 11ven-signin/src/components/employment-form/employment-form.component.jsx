import './employment-form.styles.scss';

import FormInputProfile from '../form-input-profile/form-input-profile.component';

const EmploymentForm = ({ formFields, handleChange }) => {

    const { title, employmentType, companyName, companylocation, companyStartDate, companyEndDate, industryName } = formFields;

    return (
        <div className='profile-forms-container'>
            <h2>Employment Details</h2>
            <div className='form'> 
                <FormInputProfile
                    name='title' 
                    type="text" 
                    label="Title"
                    handleChange={handleChange} 
                    value={title} 
                    required 
                /> 

                <FormInputProfile
                    name='employmentType' 
                    type="text" 
                    label="Employment Type"
                    handleChange={handleChange} 
                    value={employmentType} 
                    required 
                /> 

                <FormInputProfile
                    name='companyName' 
                    type="text" 
                    label="Company Name"
                    handleChange={handleChange} 
                    value={companyName} 
                    required 
                />

                <FormInputProfile
                    name='companylocation' 
                    type="text" 
                    label="Location"
                    handleChange={handleChange} 
                    value={companylocation} 
                    required 
                />

                <FormInputProfile
                    name='companyStartDate' 
                    type="date" 
                    label="Start Date"
                    handleChange={handleChange} 
                    value={companyStartDate} 
                    required 
                />

                <FormInputProfile
                    name='companyEndDate' 
                    type="date" 
                    label="End Date"
                    handleChange={handleChange} 
                    value={companyEndDate} 
                    required 
                />

                <FormInputProfile
                    name='industryName' 
                    type="text" 
                    label="Industry"
                    handleChange={handleChange} 
                    value={industryName} 
                    required 
                /> 
            </div>  
        </div>
    )
};

export default EmploymentForm;