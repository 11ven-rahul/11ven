import { useState } from 'react';

import './pricing-steps.styles.scss';

import PricingStepOne from '../pricing-step-one/pricing-step-one.component';
import PricingStepTwo from '../pricing-step-two/pricing-step-two.component';
import PricingStepThree from '../pricing-step-three/pricing-step-three.component';


const PricingSteps = ({ sliderValue, handleSliderChange }) => {
    const [coreOptionSelected, setCoreOptionSelected] = useState("entryLevel");
    const [packageTypeSelected, setPackageTypeSelected] = useState("intern");

    return (
        <div className='steps-container'>
            <PricingStepOne sliderValue={sliderValue} handleSliderChange={handleSliderChange} />
            <br />
            <PricingStepTwo />
            <br />
            <PricingStepThree />
            </div>
    )
};

export default PricingSteps;

// <Slider sliderValue={sliderValue} handleSliderChange={handleSliderChange} />