import { useContext } from 'react';
import './feature-card.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import CustomButton from '../custom-button/custom-button.component';

import {ReactComponent as TickIcon} from '../../assets/tick.svg';
import {ReactComponent as FeaturesIcon} from '../../assets/features.svg';

const FeatureCard = ({ft}) => {

    const { addItemToCart, clearItemFromCart, addedItems} = useContext(CartContext);
    
    

    const featureAddHandle = () => {
        addItemToCart(ft)
    }
    const clearItemHandler = () => {
        clearItemFromCart(ft);
    };
    
    return (
        <div key={ft.id} className={addedItems.some(ai => ft.id === ai) ? 'feature-card added' : 'feature-card'}>
            <div className='feature-start'>
                <div className='ft-icon-container'>
                    <FeaturesIcon className='ft-icon' />
                </div>
                <div className='name-st-box'>
                    <h4>{ft.name}</h4>
                    <p>{ft.sub_text}</p>
                </div>
            </div>
            
            
            <div className='end-content'>  
                <p>&#8377;{ft.price}</p>
                {addedItems.some(ai => ft.id === ai) ? 
                <div className='toggle-add-box' onClick={clearItemHandler}>
                    <TickIcon className='tick-icon' />
                    <span className='tick-added'>ADDED</span>
                </div>
                :
                <CustomButton onClick={featureAddHandle} buttonType="features">
                    <span className='feature-text'>ADD</span>
                </CustomButton>}
            </div> 
        </div>
    )
};

export default FeatureCard;