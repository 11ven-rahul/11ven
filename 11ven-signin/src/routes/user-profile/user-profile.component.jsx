import './user-profile.styles.scss';

import HorizontalLinearStepper from '../../components/horizontal-stepper/horizontal-stepper.component';

const UserProfile = () => {

    return (
        <div className='user-profile-container'>
            <div className='form-box'>
                <HorizontalLinearStepper />
            </div>
            
        </div>
        
    );
}

export default UserProfile;