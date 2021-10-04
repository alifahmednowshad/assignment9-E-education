import React from 'react';
import './HomeCinfo.css'

const HomeCinfo = (props) => {

    const {c_img, c_name, title, lesson, student} = props.course || {};

    return (
        <div className="col-lg-6 col-md-6 col-12 ">
            <div className="card h-100 bg-light">
                <div className='p-3'>
                    <img src={c_img} className='course-img card-img-top img-fluid' alt="" />
                </div>
                <div className="card-body">
                    <h4>{c_name}</h4>
                    <h3 className='text-primary'>{title}</h3>
                    <div className='d-flex justify-content-between'>
                        <h5>Lesson: {lesson}</h5>
                        <h5>Students: {student}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCinfo;