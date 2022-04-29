import BundlesCard from '../bundles-card/bundles-card.component';
import './pricing-step-three.styles.scss';

const Bundles = [
    {
        id: "b1",
        name: "Essentials",
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
                name: "PSC Hard Copy Certificate(Soft Bind)",
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
        name: "Impact",
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
        ]
    },
    {
        id: "b3",
        name: "Complete",
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
                name: "PSC Framed Certificate",
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
        ]
    }
]

const PricingStepThree = () => {
    return (
        <div className='stage-step'>
            <div className='name-step'>
                <span className='text-step'>Select</span>
            </div>
            <span className='stage-title'>Popular Bundles</span>
            <h4 style={{fontWeight: "450", fontSize: "16px"}}>
                Not sure how to optimize the best package  for yor <br />
                company? Consider our most poular ones.
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