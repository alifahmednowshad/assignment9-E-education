import React from 'react';
import { useHistory } from 'react-router';
import useInfodata from '../../hooks/useInfodata';
import HomeCinfo from '../HomeCinfo/HomeCinfo';
import './Home.css'

const Home = () => {

    const history = useHistory([]);
    const [courses] = useInfodata([]);
    const handleCourseBtn = () =>{
        history.push('./courses')
    }
    
    return (
        <div>
            <div className='hero-area d-flex align-items-center justify-content-center'>
                <div className='rounded-3 bg-white text-center p-5'>
                    <h1 className='fs-1 fw-bolder'>Welcome to E-education Platform</h1>
                    <p className='fs-5'>E-Learning, or electronic learning, is the delivery of learning and training through digital resources</p>
                </div>
            </div>
            <div className='container my-5'>
                <h1>Our Courses</h1>
                <div className='row d-flex g-4'>
                    {
                        courses.slice(0,4).map(course => <HomeCinfo course={course}></HomeCinfo>)
                    }
                    <div className='d-flex justify-content-center mt-5'>
                        <button onClick={handleCourseBtn} className='btn btn-primary w-50 p-3 py-2'>View More ....</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;