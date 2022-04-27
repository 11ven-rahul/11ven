import './pricing-step-one.styles.scss';

import OptionsCard from '../options-card/options-card.component';

import { ReactComponent as AydIcon } from '../../assets/users.svg';
import { ReactComponent as AutIcon } from '../../assets/automation.svg';
import { ReactComponent as InsIcon } from '../../assets/insights.svg';
import Slider from '../slider/slider.component';

const coreOptions = [
    {
        id: 1,
        name: "Entry Level",
        description: "For entry level tests",
    },
    {   id: 2,
        name: "Skill Based",
        description: "For Skill based tests",   
    },
    {
        id: 3, 
        name: "Company Based",
        description: "For Company Based tests"
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
                    <OptionsCard key={opt.id} opt={opt} />
                ))
            }
            </div>
            <div className='test-number-slider'>
                <h2>Tests</h2>
                <Slider sliderValue={sliderValue} handleSliderChange={handleSliderChange} />
            </div>
        </div>
    )
};

export default PricingStepOne;