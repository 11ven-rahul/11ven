import './pricing-steps.styles.scss';

import PricingStepOne from '../pricing-step-one/pricing-step-one.component';
import PricingStepTwo from '../pricing-step-two/pricing-step-two.component';
import PricingStepThree from '../pricing-step-three/pricing-step-three.component';
import CustomButton from '../custom-button/custom-button.component';
import { useNavigate } from 'react-router-dom'


const PricingSteps = ({ sliderValue, handleSliderChange }) => {
    
    const navigate = useNavigate()
    return (
        <div className='steps-container'>
            <PricingStepOne sliderValue={sliderValue} handleSliderChange={handleSliderChange} />
            <br />
            <PricingStepTwo />
            <br />
            <div  className='contact-us-container'>
                <div className='contact-text'>
                    <h1 style={{ fontWeight: "800", fontSize: "40px" }}>Need Help</h1>
                    <p style={{textAlign: "center"}}>Our team is on standby waiting to assist you with any <br />
                        questions you may have.
                    </p>
                    <div className='contact-button-container'>
                    <CustomButton type="button" buttonType="contact" onClick={() => navigate('/contact')}><span className='feature-text'>Contact Us</span></CustomButton>
                    </div>
                    
                </div>  
            </div>
            <PricingStepThree />
            </div>
    )
};

export default PricingSteps;

// <Slider sliderValue={sliderValue} handleSliderChange={handleSliderChange} />