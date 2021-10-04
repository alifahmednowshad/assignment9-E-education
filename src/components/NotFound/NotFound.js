import React from 'react';
import './NotFound.css'
import im from '../../images/404-1.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='img-fluid w-100' src={im} alt="" />
        </div>
    );
};

export default NotFound;