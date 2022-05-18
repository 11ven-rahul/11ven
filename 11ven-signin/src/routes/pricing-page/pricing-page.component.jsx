import './pricing-page.styles.scss';

import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/cart.context';

import PricingCart from '../../components/pricing-cart/pricing-cart.component';

import PricingSteps from '../../components/pricing-steps/pricing-steps.component';
import axios from 'axios';


const PricingPage = () => {
    const {sliderValue, setSliderValue, cartItems} = useContext(CartContext)

    useEffect(() => {
        return () => { 
            console.log(`{
                'last_clicked_module': {
                    'cartItems': ${cartItems},
                    'sliderValue': ${sliderValue},
                } 
            }`);
            axios.post('http://127.0.0.1:5000/user_interaction',
            {
                'last_clicked_module': {
                    'cartItems': cartItems,
                    'sliderValue': sliderValue,
                } 
            },
            {
                headers: { 'Authorization': `Bearer ${(JSON.parse(localStorage.getItem("user_data"))).token}` }
            }
            )
            
    }})

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