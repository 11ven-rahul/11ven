import React from 'react';

import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => (
    <Fragment>
        <div className='navigation-container'>
            <div className='options'>
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            </div>
        </div>
        <Outlet />    
    </Fragment>
)


export default Navigation