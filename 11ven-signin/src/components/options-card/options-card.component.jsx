import { useContext } from 'react';

import './options-card.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const OptionsCard = ({opt}) => {

    const { addItemToCart, addedItems } = useContext(CartContext);
    const coreClickHandler = () => {
        addItemToCart(opt)
    }

    return (
        <div key={opt.id} onClick={coreClickHandler} className={ addedItems.some(ai => opt.id === ai) ? "options-card selected" : "options-card" }>
            <h2>{opt.name}</h2>
            <p>{opt.description}</p>
        </div>
    )
};

export default OptionsCard