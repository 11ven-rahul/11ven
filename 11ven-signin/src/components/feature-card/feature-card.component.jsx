import { useState } from 'react';
import './feature-card.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import {ReactComponent as TickIcon} from '../../assets/tick.svg';

const FeatureCard = ({ft}) => {
    const [added, setAdded] = useState(false);

    const featureAddHandle = () => {
        added ? setAdded(false) : setAdded(true);
        console.log(added)
    }
    return (
        <div key={ft.id} className={added ? 'feature-card added' : 'feature-card'}>
            <h4>{ft.name}</h4>
            <div className='end-content'>
                {
                    ft.type === "monthly" ?
                    <p>&#8377;{ft.price}/mo</p>
                    :
                    <p>&#8377;{ft.price}</p>
                }
                {added ? 
                <div className='toggle-add-box' onClick={featureAddHandle}>
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