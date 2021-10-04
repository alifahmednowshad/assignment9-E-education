import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    const {t_name, t_img,} = props.course || {};
    return (
        <div className="col-lg-4 col-md-6 col-12 ">
            <div className="card h-100 bg-light">
                <div className='p-3'>
                    <img src={t_img} className='tea-img card-img-top img-fluid' alt="" />
                </div>
                <div className="card-body text-center">
                    <h4 className='text-center'>{t_name}</h4>
                    <div className='fs-3'>
                        <i class="fab fa-facebook-square me-4 t-icons"></i>
                        <i class="fab fa-linkedin me-4 t-icons"></i>
                        <i class="fab fa-twitter-square t-icons"></i>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Teacher;