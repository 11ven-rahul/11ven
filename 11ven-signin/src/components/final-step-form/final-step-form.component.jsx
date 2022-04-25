import './final-step-form.styles.scss';

import { useState, useEffect } from 'react';

import PillSelect from '../pill-select/pill-select.component';
import Select from 'react-select';


const options = [
    { value: 'Basic Certification', label: 'Basic Certification' },
    { value: 'Intermediate Certification', label: 'Intermediate Certification' },
    { value: 'Advanced Certification', label: 'Advanced Certification' },
  ]

const options1 = [
{ value: 'Python', label: 'Python' },
{ value: 'Java', label: 'Java' },
{ value: 'JavaScript', label: 'JavaScript' },
{ value: 'HTML 5', label: 'HTML 5' },
{ value: 'CSS 3', label: 'CSS 3' },
{ value: 'React', label: 'React' },
{ value: 'AI/ML', label: 'AI/ML' },
]



const FinalStepForm = ({handleSkillChange, handleCertificateChange, formFields}) => {

    // const [selectedOption, setSelectedOption] = useState(null)

    // const handleChange = e => {
    //     setSelectedOption(e.value)
    //     console.log(e)
    // };

    const { skillSelectedOption, certificateSelectedOption } = formFields;

    return (
        <div className='final-form-container'>
            <div className='pill-select'>
            <Select 
                isMulti
                name="selectedOption"
                options={options1}
                placeholder='Skills'
                value={options1.find(obj => obj.value === skillSelectedOption)}
                onChange={handleSkillChange}
            />
            </div>
            
            <Select
                className='select' 
                options={options} 
                placeholder="Certification"
                value={options1.find(obj => obj.value === certificateSelectedOption)}
                onChange={handleCertificateChange}
                
            />
        </div>
    )
};

export default FinalStepForm