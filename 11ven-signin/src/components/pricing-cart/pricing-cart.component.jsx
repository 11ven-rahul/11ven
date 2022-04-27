import './pricing-cart.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const PricingCart = () => {
    return (
        <div className="sticky">
            <p>You've Selected</p>
            <div className='cart-items'>
                <h3>Growth Edition</h3>
            </div>
            <div className='cart-items'>
                <h3>Pipelines   </h3>
            </div>
            <p>Total Investment</p>
            <h1>$365/mo</h1>
            <div className='buttons-container'>
                <CustomButton>Start Free Trial</CustomButton>
            </div>
        </div>
    )
};

export default PricingCart;