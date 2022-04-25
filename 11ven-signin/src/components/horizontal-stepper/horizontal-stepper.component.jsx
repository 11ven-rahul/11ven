import * as React from 'react';
import axios from 'axios';

import { One, Two, Three, Four } from '../profile-form-one/profile-form-one.component';
import CustomStepIcon from '../custom-step-icon/custom-step-icon.component';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import CustomButton from '../custom-button/custom-button.component';



const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

const defaultFormFields = {
  firstName: '',
  lastName: '',
  countryDetails: '',
  cityDetails: '',
  contactInfo: '',
  about: '',

  schoolName: '',
  degreeName: '',
  fieldOfStudy: '',
  schoolStartDate: '',
  schoolEndDate: '',
  grade: 0,
  educationDetails: [],

  title: '',
  employmentType: '',
  companyName: '',
  companylocation: '',
  companyStartDate: '',
  companyEndDate: '',
  industryName: '',
  employmentDetails: [],

  skillSelectedOption: [],
  certificateSelectedOption: '',

}


export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  

  const [formFields, setFormFields] = React.useState(defaultFormFields);
  

  

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  

  const handleChange = event => {
      const {name, value} = event.target;

      setFormFields({ ...formFields, [name]: value });
 
  };

  const handleSkillChange = (e) => {
    const valueArray = e.map(el => el.value)
    setFormFields({ ...formFields, skillSelectedOption: valueArray  })
    console.log(formFields)
  }

  const handleCertificateChange = certificateSelectedOption => {
    const { value } = certificateSelectedOption;
    setFormFields({ ...formFields, certificateSelectedOption: value  })
    console.log(formFields)
  }

 

  const handleAddNewEduField = () => {
    
    const { schoolName, degreeName, fieldOfStudy, schoolStartDate, schoolEndDate, grade } = formFields
    const edu = formFields.educationDetails
    edu.push(
      {
        'schoolName': schoolName,
        'degreeName': degreeName,
        'fieldOfStudy': fieldOfStudy,
        'schoolStartDate': schoolStartDate,
        'schoolEndDate': schoolEndDate,
        'grade': grade,
       })
    
    setFormFields({...formFields, educationDetails: edu});
    console.log(formFields)
  }
  const handleAddNewEmpField = () => {
    
    
    const { title, employmentType, companyName, companylocation, companyStartDate, companyEndDate, industryName } = formFields
    const emp = formFields.employmentDetails
    emp.push(
      {
        'title': title,
        'employmentType': employmentType,
        'companyName': companyName,
        'companylocation': companylocation,
        'companyStartDate': companyStartDate,
        'companyEndDate': companyEndDate,
        'industryName': industryName,
       })
    
    setFormFields({...formFields, employmentDetails: emp});
    console.log(formFields)
  }

  

  const isStepOptional = (step) => {
    return step === null;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleFinish = async (event) => {
    console.log(JSON.stringify(formFields))
    axios.post('http://127.0.0.1:5000/userprofile', JSON.stringify(formFields), {headers: { 'Content-Type':'application/json'}})
    .then(res => console.log(res))
    .catch(error => console.log(error));

    resetFormFields();
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Box sx={{ width: '950px'}}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel StepIconComponent={CustomStepIcon} {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <CustomButton onClick={handleReset}>Reset</CustomButton>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {<div className='form-container'>
              {
                {
                  0: <One formFields={formFields} handleChange={handleChange} />,

                  1: <Two formFields={formFields} handleChange={handleChange} handleAddNewEduField={handleAddNewEduField}  />,

                  2: <Three formFields={formFields} handleChange={handleChange} handleAddNewEmpField={handleAddNewEmpField}  />,

                  3: <Four handleSkillChange={handleSkillChange} handleCertificateChange={handleCertificateChange} formFields={formFields}  />,
                }[activeStep]
              }
            </div>}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, mt: "70px" }}>
              <CustomButton
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </CustomButton>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <CustomButton color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </CustomButton>
              )}

              <CustomButton onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </CustomButton>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
    
  );
}
