import './footer.styles.scss';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
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
    );
};

export default Footer;