import React, { useState } from 'react';
import './Course.css';
import courseData from '../../courseData/courseData'
import CourseDetails from '../CourseDetails/CourseDetails'

const Courses = () => {
    const [courses, setCourses] = useState(courseData);
    const [cart, setCart] = useState([]);
    const [courseCode, setCourseCode] = useState([]);

    const handlePurchases = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
        const newCourseCode = [...courseCode, course.id];
        setCourseCode(newCourseCode);
    }
    const totalFees = cart.reduce((total, cart) => total + cart.fees, 0)

    let courseNumber = 1;
    return (
        <div className="main-container">
            <div className="course-container">
                {
                    courses.map(course => <CourseDetails handlePurchases={handlePurchases} courseNumber={courseNumber++} courses={course} key={course.id}></CourseDetails>)

                }
            </div>
            <div className="purchase-summary">
                <h5>Purchase Summary:</h5>
                <h6>Courses Enrolled: {cart.length}</h6>
                <h6 style={{overflow: 'auto'}}>Courses Code:{courseCode}</h6>
                <h6>Totalfees: ${totalFees}</h6>
            </div>
        </div>
    );
};

export default Courses;