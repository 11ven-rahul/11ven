import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/PSC_Logo.svg'
import './navigation.styles.scss'
import { UserContext } from '../../contexts/user.context';

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await localStorage.removeItem("user_data");
        setCurrentUser(null);
      };


    return (
        <Fragment>
            <div className='navigation-container'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo' /> 
                </Link>
                <div className='options'>
                    <Link className='option' to='/'>Products</Link>
                    <Link className='option' to='/'>Solutions</Link>
                    <Link className='option' to='/'>Science</Link>
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
            <div className='footer'>
                <div className='footer-container'>
                    <div className='options'>
                        <div className='footer-column'>
                            <Link className='option' to='/'>Products</Link>
                            <Link className='sub-option' to='/'>Remote First Hiring</Link>
                            <Link className='sub-option' to='/'>Remote First interviewing</Link>
                        </div>
                        
                        <div className='footer-column'>
                            <Link className='option' to='/'>Solutions</Link>
                            <Link className='sub-option' to='/'>Professional Hiring</Link>
                            <Link className='sub-option' to='/'>Assessment Services</Link>
                        </div>

                        <div className='footer-column'>
                            <Link className='option' to='/'>Customers</Link>
                            <Link className='sub-option' to='/'>All Industries</Link>
                            <Link className='sub-option' to='/'>Financial Services</Link>
                        </div>

                        <div className='footer-column'>
                            <Link className='option' to='/'>Resources</Link>
                            <Link className='sub-option' to='/'>Events</Link>
                            <Link className='sub-option' to='/'>Webinars</Link>
                        </div>

                        <div className='footer-column'>
                            <Link className='option' to='/'>Blogs</Link>
                            <Link className='sub-option' to='/'>Find a Job</Link>
                            <Link className='sub-option' to='/'>Industry Insights</Link>
                        </div>

                        <div className='footer-column'>
                            <Link className='option' to='/'>About Us</Link>
                            <Link className='sub-option' to='/'>Company</Link>
                            <Link className='sub-option' to='/'>Careers</Link>
                        </div>
                    </div>
                </div>
            </div>      
        </Fragment>
    )
    
}


export default Navigation