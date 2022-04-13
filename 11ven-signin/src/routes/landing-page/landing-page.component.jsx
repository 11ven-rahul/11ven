import './landing-page.styles.scss';

import LoginCard from '../../components/login-card/login-card.component';

const LandingPage = () => {
    return (
        <div className='landing-page-container'>
            <span className='heading1'>Login</span>

            <div className='login-card-container'>
                <LoginCard 
                    title = "For Companies"
                    description = "We are the market-leading technical interview platform to identify and hire developers with the right skills."
                />  

                <LoginCard
                    title = "For Developers"
                    description = "Join over 18 million developers, practice coding skills, prepare for interviews, and get hired"
                />
            </div>
        </div>
        
    )
};

export default LandingPage;