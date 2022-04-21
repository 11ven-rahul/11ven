import { useState } from 'react';
import './employment-form.styles.scss';

import FormInputProfile from '../form-input-profile/form-input-profile.component';
import DragAndDrop from '../draganddrop/draganddrop.component';


const EmploymentForm = ({ formFields, handleChange }) => {

    const [selectedFile, setSelectedFile] = useState(null);

    const onFileChange = event => { 
        setSelectedFile(event.target.files[0]); 
    }; 

    const onFileUpload = () => { 
        // Create an object of formData 
        const formData = new FormData(); 
       
        // Update the formData object 
        formData.append( 
          "myFile", 
          selectedFile, 
          selectedFile.name 
        ); 

        console.log(selectedFile)
    }

    const { title, employmentType, companyName, companylocation, companyStartDate, companyEndDate, industryName } = formFields;

    return (
        <div className='profile-forms-container'>
            <h2>Employment Details</h2>
            <form className='form'> 
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
                <div className='upload-container'>
                    <DragAndDrop />
                </div>
                
            
            </form>  
        </div>
    )
};

export default EmploymentForm;