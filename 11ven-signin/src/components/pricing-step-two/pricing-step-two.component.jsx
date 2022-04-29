import './pricing-step-two.styles.scss';
import FeatureCard from '../feature-card/feature-card.component';

const featuresOptions = [
    {
        id: 4,
        name: "Soft-Bound Certificate",
        sub_text: "Receive ISO and Skill India Recognition.",
        price: 800,
    },
    {
        id: 5,
        name: "Framed Certificate",
        sub_text: "Receive your certificate in a more robust form.",
        price: 1600,
    },
    {
        id: 6,
        name: "Placement Support",
        sub_text: "Leverage our network and experience to land your dream job.",
        price: 4000,
    },
    {
        id: 7,
        name: "Learn a New Skill",
        sub_text: "Stay up-to-date by obtaining current and critical skills.",
        price: 5000,
    },
    {
        id: 8,
        name: "Career Counselling",
        sub_text: "Consult our experts and make informed career decisions.",
        price: 5000,
    },
    {
        id: 9,
        name: "Knowledge Bank",
        sub_text: "Enjoy lifetime access to our rich knowledge base.",
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
            Add our products and services to your cart as you see fit. Select only the components you need.   
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