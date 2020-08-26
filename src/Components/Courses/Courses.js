import React, { useState } from 'react';
import './Course.css';
import courseData from '../../courseData/courseData'
import CourseDetails from '../CourseDetails/CourseDetails'

const Courses = () => {
    const [courses, setCourses] = useState(courseData);
    const [cart, setCart] = useState([])
    const handlePurchases = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }
    const totalFees = cart.reduce((total, cart)=> total+cart.fees,0)

    return (
        <div className="main-container">
            <div className="course-container">
                {
                    courses.map(course => <CourseDetails handlePurchases={handlePurchases} courses={course} key={course.id}></CourseDetails>)
                }
            </div>
            <div className="purchase-summary">
                <h5>Purchase Summary:</h5>
                <p>Courses Enrolled: {cart.length}</p>
                <p>totalfees: ${totalFees}</p>
            </div>
        </div>
    );
};

export default Courses;