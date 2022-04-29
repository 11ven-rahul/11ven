import './pricing-page.styles.scss';

import { useState, useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import PricingCart from '../../components/pricing-cart/pricing-cart.component';

import PricingSteps from '../../components/pricing-steps/pricing-steps.component';


const PricingPage = () => {

    const {sliderValue, setSliderValue} = useContext(CartContext)

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value)
        console.log(sliderValue)
    }
    return (
        <div className="pricing-page-container">
            <div className='pricing-page-banner'>
                <div className='banner-text'>
                    <h1>Validation and industry exposure at an affordable price, only at PSC.</h1>
                    <p>Choose from a plethora of offerings. Pay for what you need.</p>
                </div>
            </div>
            <div className='steps-cart-container'>
                <PricingSteps sliderValue={sliderValue} handleSliderChange={handleSliderChange} />
                <PricingCart />
            </div>
            
        </div>
    );
}

export default PricingPage;