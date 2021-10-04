import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='container-fluid bg-info py-2 text-center'>
            <div className='fs-3'>
                <i class="fab fa-facebook-square me-4 icons"></i>
                <i class="fab fa-linkedin me-4 icons"></i>
                <i class="fab fa-twitter-square icons"></i>
            </div>
            <h1 className="fs-1 fw-bolder text-white">E-education</h1>
            <p>© 2021 e-education.com. All rights reserved.</p>
        </div>
    );
};

export default Footer;