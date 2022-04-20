import * as React from 'react';

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
}

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [formFields, setFormFields] = React.useState(defaultFormFields);
  

  const handleChange = event => {
      const {name, value} = event.target;

      setFormFields({ ...formFields, [name]: value });
  };

  

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

                  1: <Two />,

                  2: <Three />,

                  3: <Four />,
                }[activeStep]
              }
            </div>}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
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

              <CustomButton onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </CustomButton>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
    
  );
}
