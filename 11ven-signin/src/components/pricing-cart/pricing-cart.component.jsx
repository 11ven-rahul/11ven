import { useContext, useState } from 'react';
import './pricing-cart.styles.scss';

import { CartContext } from '../../contexts/cart.context';
import CustomButton from '../custom-button/custom-button.component';
import PCartItem from '../pcart-item/pcart-item.component';

const PricingCart = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    

    return (
        <div className="sticky">
            <p>You've Selected</p>
            {cartItems.map(item => (
                <PCartItem
                    key={item.id} 
                    cartItem={item} 
                />
            ))}
            <p>Total Investment</p>
            <h1>&#8377;{cartTotal}</h1>
            <div className='buttons-container'>
                <CustomButton>Start Free Trial</CustomButton>
            </div>
        </div>
    )
};

export default PricingCart;