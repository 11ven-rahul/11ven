import './pricing-step-two.styles.scss';
import FeatureCard from '../feature-card/feature-card.component';

const featuresOptions = [
    {
        id: 4,
        name: "PSC Hard Copy Certificate(Soft Bind)",
        price: 800,
    },
    {
        id: 5,
        name: "PSC Framed Certificate",
        price: 1600,
    },
    {
        id: 6,
        name: "Placement Support",
        price: 4000,
    },
    {
        id: 7,
        name: "Professional Training/Learn a new Skill",
        price: 5000,
    },
    {
        id: 8,
        name: "Career Counselling",
        price: 5000,
    },
    {
        id: 9,
        name: "Knowledge Bank",
        price: 2500,
    },
]

const PricingStepTwo = () => {

    return (
        <div className='stage-step'>
            <div className='name-step'>
                <span className='text-step'>Step 2</span>
            </div>
            <span className='stage-title'>Add Features</span>
            <h4 style={{fontWeight: "450", fontSize: "16px"}}>
                Features can be added or needed as needed by your<br />
                choice.   
            </h4>
            <div className='features-container'>
            {
                featuresOptions.map(ft => (
                    <FeatureCard key={ft.id} ft={ft} />
                ))
            }
            </div>
            
        </div>
    )
};

export default PricingStepTwo;