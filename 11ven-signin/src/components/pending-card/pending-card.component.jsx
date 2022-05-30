import './pending-card.styles.scss'

import CustomButton from '../custom-button/custom-button.component';

const PendingCard = ({purchasedData}) => {
    const cartItems = purchasedData.cartItems
    console.log(cartItems)
    return (
        <div className='pending-card-container'>
            <div className='pending-card-title'>
                <h1>Pending</h1>
            </div>
            <div className='pending-display' style={{minHeight: "190px", height: "auto"}}>
            {
                cartItems ?
                cartItems.map(item => (
                    <p style={{fontSize: "20px"}}>{item.name}</p>
                ))
                :
                <div></div>
            }    
            </div>
            <div className='pending-button-container'>
                <CustomButton buttonType='pricecart'>Start Now</CustomButton>
            </div>
        </div>
    )
};

export default PendingCard;