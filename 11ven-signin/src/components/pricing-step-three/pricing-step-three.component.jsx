import { Divider } from 'antd';
import CustomButton from '../custom-button/custom-button.component';
import './pricing-step-three.styles.scss';

const PricingStepThree = () => {
    return (
        <div className='stage-step'>
            <div className='name-step'>
                <span className='text-step'>Select</span>
            </div>
            <span className='stage-title'>Popular Bundles</span>
            <h4 style={{fontWeight: "450", fontSize: "16px"}}>
                Not sure how to optimize the best package  for yor <br />
                company? Consider our most poular ones.
            </h4>
            <div className='bundles-options-container'>
                <div className='bundles'>
                    <h2 style={{fontWeight: "450", marginLeft: "40px"}}>Essentials</h2> 
                    <h5 style={{fontWeight: "400", fontSize: "10px", color: "#BAC2C9"}}>Bundle Includes:</h5> 
                    <div className='core-choice'>
                        <h2 style={{fontWeight: "500",fontSize: "13px", position: "relative", top: "-10px"}}>Entry Level 1</h2>
                        <p style={{fontSize: "10px"}}>3 Tests</p>
                    </div>
                    <div className='add-ons-choice'>
                        <h2 style={{fontWeight: "500",fontSize: "13px", position: "relative", top: "-10px"}}>Add ons</h2>
                        <p style={{fontSize: "10px"}}>None</p>
                    </div>
                    <div className='card-footer'>
                        <CustomButton buttonType="features">
                            <span className='feature-text'>Start</span>
                        </CustomButton>
                        <span className='price-container' style={{display: "flex"}}><h1>&#8377;2250</h1><p>/mo</p></span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default PricingStepThree;