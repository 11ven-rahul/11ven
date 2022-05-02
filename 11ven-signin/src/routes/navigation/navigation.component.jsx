import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/PSC_Logo.svg'
import './navigation.styles.scss'
import { UserContext } from '../../contexts/user.context';
import Footer from '../../components/footer/footer.component';

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await localStorage.removeItem("user_data");
        setCurrentUser(null);
      };


    return (
        <Fragment>
            <div className='App navigation-container'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo' /> 
                </Link>
                <div className='options'>
                    <Link className='option' to='/userprofile'>Edit Profile</Link>
                    <Link className='option' to='/pricing'>Pricing</Link>
                    <Link className='option' to='/contact'>Contact Us</Link>
                </div>
                <div className='sign-in-container'>
                {currentUser ? (
                    <span className='sign-out' onClick={signOutHandler}>
                      
                      SIGN OUT
                    </span>
                  ) : (
                    <Link className='sign-in' to='/authpage'>
                      SIGN IN
                    </Link>
                  )}
                </div>
            </div>
            <Outlet /> 
            <Footer />     
        </Fragment>
    )
    
}


export default Navigation