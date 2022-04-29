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
            <PricingSteps sliderValue={sliderValue} handleSliderChange={handleSliderChange} />
            <PricingCart />
        </div>
    );
}

export default PricingPage;