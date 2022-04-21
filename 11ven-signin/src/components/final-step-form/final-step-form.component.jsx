import './final-step-form.styles.scss';

import PillSelect from '../pill-select/pill-select.component';
import Select from 'react-select';


const options = [
    { value: 'Basic Certification', label: 'Basic Certification' },
    { value: 'Intermediate Certification', label: 'Intermediate Certification' },
    { value: 'Advanced Certification', label: 'Advanced Certification' },
  ]

const FinalStepForm = () => {
    return (
        <div className='final-form-container'>
            <div className='pill-select'>
                <PillSelect  />  
            </div>
            
            <Select className='select' options={options} />
        </div>
    )
};

export default FinalStepForm