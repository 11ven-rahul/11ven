import CustomButton from '../custom-button/custom-button.component';
import './pricing-step-two.styles.scss';

const featuresOptions = [
    {
        id: 1,
        name: "PSC Hard Copy Certificate(Soft Bind)",
        price: 800,
        type: "one-time",
    },
    {
        id: 2,
        name: "PSC Framed Certificate",
        price: 1600,
        type: "one-time",
    },
    {
        id: 3,
        name: "Placement Support",
        price: 4000,
        type: "monthly",
    },
    {
        id: 4,
        name: "Professional Training/Learn a new Skill",
        price: 5000,
        type: "monthly",
    },
    {
        id: 5,
        name: "Career Counselling",
        price: 5000,
        type: "monthly",
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
                    <div key={ft.id} className='feature-card'>
                        <h4>{ft.name}</h4>
                        <div className='end-content'>
                            {
                                ft.type === "monthly" ?
                                <p>&#8377;{ft.price}/mo</p>
                                :
                                <p>&#8377;{ft.price}</p>
                            }
                            <CustomButton  buttonType="features">
                                <span className='feature-text'>Add</span>
                            </CustomButton>
                        </div> 
                    </div>
                    
                ))
            }
            </div>
            
        </div>
    )
};

export default PricingStepTwo;