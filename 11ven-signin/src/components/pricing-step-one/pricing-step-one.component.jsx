import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './pricing-step-one.styles.scss';

import OptionsCard from '../options-card/options-card.component';

import { ReactComponent as AydIcon } from '../../assets/users.svg';
import { ReactComponent as AutIcon } from '../../assets/automation.svg';
import { ReactComponent as InsIcon } from '../../assets/insights.svg';
import Slider from '../slider/slider.component';

const coreOptions = [
    {
        id: 1,
        name: "Base Camp",
        description: "For entry level tests",
        price: 2250,
        added: false,
    },
    {   id: 2,
        name: "Pick Your Tools",
        description: "For Skill based tests",   
        price: 2250,
        added: false,
    },
    {
        id: 3, 
        name: "Pick Your Destination",
        description: "For Company Based tests",
        price: 2250,
        added: false,
    }
]

const PricingStepOne = ({ sliderValue, handleSliderChange }) => {
    
    return (
        <div className='stage-step'>
            <div className='name-step'>
                <span className='text-step'>Step 1</span>
            </div>
            <span className='stage-title'>Customize Your Core</span>
            <h4 style={{fontWeight: "450", fontSize: "16px"}}>
                Your core seamlessly connects all your data with PSC's <br />
                powerful automation and insight engines.
            </h4>
            <div className='includes-container'>
                <span style={{fontWeight: "500"}} >Core Includes:</span>
                <div className='core-options-container'>
                    <AydIcon></AydIcon>
                    <span className='icons-description'>All Your Data</span>
                </div>
                <div className='core-options-container'>
                    <AutIcon></AutIcon>
                    <span className='icons-description'>Automation</span>
                </div>
                <div className='core-options-container'>
                    <InsIcon></InsIcon>
                    <span className='icons-description'>Automation</span>
                </div>
            </div>
            <div className='card-container'>
            {
                coreOptions.map(opt => (
                    <OptionsCard  key={opt.id} opt={opt} />
                ))
            }
            </div>
            <div className='test-number-slider'>
                <div className='price-display'>
                    <h2>Tests</h2>
                    <p>&#8377;2250/test</p>
                </div>
                <Slider sliderValue={sliderValue} handleSliderChange={handleSliderChange} />
            </div>
        </div>
    )
};

export default PricingStepOne;