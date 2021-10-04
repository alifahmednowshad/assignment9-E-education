import React from 'react';
import './NotFound.css'
import notFimg from '../../images/404-1.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='img-fluid w-100' src={notFimg} alt="" />
        </div>
    );
};

export default NotFound;