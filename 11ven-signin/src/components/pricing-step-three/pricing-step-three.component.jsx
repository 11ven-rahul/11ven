import BundlesCard from '../bundles-card/bundles-card.component';
import './pricing-step-three.styles.scss';

const Bundles = [
    {
        id: "b1",
        name: "Basic Bundle",
        tests: 3,
        price: 11550,
        addons: [
            {
                id: 1,
                name: "Base Camp",
                description: "For entry level tests",
                price: 2250,
            },
            {
                id: 4,
                name: "Soft-Bound Certificate",
                price: 800,
            },
            {
                id: 6,
                name: "Placement Support",
                price: 4000,
            },
        ]
    },
    {
        id: "b2",
        name: "Essentials Bundle",
        tests: 3,
        price: 17350,
        addons: [
            {
                id: 1,
                name: "Base Camp",
                description: "For entry level tests",
                price: 2250,
            },
            {
                id: 5,
                name: "Framed Certificate",
                price: 1600,
            },
            {
                id: 6,
                name: "Placement Support",
                price: 4000,
            },
            {
                id: 7,
                name: "Learn a New Skill",
                price: 5000,
            },
        ]
    },
    {
        id: "b3",
        name: "Complete Bundle",
        tests: 3,
        price: 19850,
        addons: [
            {
                id: 1,
                name: "Base Camp",
                description: "For entry level tests",
                price: 2250,
            },
            {
                id: 5,
                name: "Framed Certificate",
                price: 1600,
            },
            {
                id: 6,
                name: "Placement Support",
                price: 4000,
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
            {
                id: 7,
                name: "Learn a New Skill",
                price: 5000,
            },
        ]
    },
    {
        id: "b4",
        name: "Placement Bundle",
        tests: 3,
        price: 17350,
        addons: [
            {
                id: 1,
                name: "Base Camp",
                description: "For entry level tests",
                price: 2250,
            },
            {
                id: 5,
                name: "Framed Certificate",
                sub_text: "Receive your certificate in a more robust form.",
                price: 1600,
            },
            {
                id: 8,
                name: "Career Counselling",
                sub_text: "Consult our experts and make informed career decisions.",
                price: 5000,
            },
            {
                id: 6,
                name: "Placement Support",
                sub_text: "Leverage our network and experience to land your dream job.",
                price: 4000,
            },
        ]
    },

]

const PricingStepThree = () => {
    return (
        <div className='stage-step'>
            <div className='name-step'>
                <span className='text-step'>Select</span>
            </div>
            <span className='stage-title'>Recommended Bundles</span>
            <h4 style={{fontWeight: "450", fontSize: "16px"}}>
            Choose from our recommended bundles to obtain  hands-on assistance in the learning-hiring life cycle.
            Maximize your Return on Investment.
            </h4>
            <div className='bundles-options-container'>
            {
                Bundles.map(bundle => <BundlesCard key={bundle.id} bundle={bundle} />)
            }
            </div>
        </div>
    )
};

export default PricingStepThree;