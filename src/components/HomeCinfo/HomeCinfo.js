import React from 'react';
import './HomeCinfo.css'

const HomeCinfo = (props) => {

    const {c_img, c_name, title, lesson, student, price} = props.course;

    return (
        <div className="col-lg-6 col-md-6 col-12 ">
            <div className="card h-100 bg-light">
                <div className='p-3'>
                    <img src={c_img} className='course-img card-img-top img-fluid' alt="" />
                </div>
                <div className="card-body">
                    <div className='d-flex justify-content-between'>
                        <h4>{c_name}</h4>
                        <h5 className='text-danger'>${price}</h5>
                    </div>
                    <h3 className='text-primary'>{title}</h3>
                    <div className='d-flex justify-content-between'>
                        <h5><i className="fas fa-book"></i> {lesson} Lesson </h5>
                        <h5><i className="fas fa-user"></i> {student} Students</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCinfo;