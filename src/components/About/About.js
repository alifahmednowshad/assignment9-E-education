import React from 'react';
import useInfodata from '../../hooks/useInfodata';
import Teacher from '../Teacher/Teacher';
import './About.css'

const About = () => {

    const [courses] = useInfodata([]);

    return (
        <div className='container'>
            <div className='course-area text-center py-5 bg-info my-5 border'>
                <h1 className='fs-1 fw-bolder'>Find the right Online <br/>tutor for you.</h1>
            </div>

            <h1>Our best teacher</h1>
            <div className="d-flex row mb-5 g-4">
                {
                 courses.slice(0,6).map(course => <Teacher course={course}></Teacher>)
                }   
            </div>
            
            <div className='d-flex justify-content-between course-area text-center py-5 bg-info my-5 border'>
                <h2 className='fs-1 fw-bolder ms-5'>Our Teachers: <span className='text-danger'>90+</span></h2>
                <h2 className='me-5 fs-1 fw-bolder'>Our Students: <span className='text-danger'>1300+</span></h2>
            </div>
        </div>
    );
};

export default About;