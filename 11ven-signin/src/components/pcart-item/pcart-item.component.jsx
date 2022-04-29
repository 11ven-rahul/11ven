import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './pcart-item.styles.scss';

const PCartItem = ({cartItem}) => {
    const {name} = cartItem;
    const { clearItemFromCart, setCoreOptionSelected, setAdded } = useContext(CartContext);

    const clearItemHandler = () => {
        clearItemFromCart(cartItem);
        // cartItem.name === "Base Camp" || cartItem.name === "Pick Your Tools" || cartItem.name === "Pick Your Destination" ?
        // setCoreOptionSelected(null) 
        // :
        // setAdded(false);
    }

    return (
        <div className='cart-items'>
            <h3>{name}</h3>
            <div className='remove-button'  onClick={clearItemHandler} >&#10005;</div>
        </div>
    )
};

export default PCartItem;