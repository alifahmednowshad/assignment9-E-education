import React from 'react';
import './CourseInfo.css'

const CourseInfo = (props) => {

    const {t_name, t_img, c_img, title, lesson, student} = props.course || {};
    
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="card h-100">
                <div>
                    <img src={c_img} className='course-img card-img-top img-fluid' alt="" />
                </div>
                <div className="card-body">
                    <h4>{title}</h4>
                    
                    <div className='d-flex align-items-center'>
                        <img src={t_img} className='teacher-img pe-3 rounded-circle img-fluid' alt="" />
                        <p>{t_name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;