import './login-card.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const LoginCard = ({title, description}) => {
    return (
        <div className='login-card-company'>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href='/authpage'>
                <CustomButton type='button'>Login</CustomButton>
            </a>
            <p>
                Don't have an account?
                <a href='/authpage'>
                <strong> Sign up.</strong>
                </a>
            </p>
        </div>
    );
};

export default LoginCard;