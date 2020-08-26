import React from 'react';
import './CourseDetails.css'

const CourseDetails = (props) => {
    const { name, instructor, email, phone, fees } = props.courses;

    return (
        <div className="course-details">
            <h4>{name}</h4>
            <p>created by:{instructor}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>price:${fees}</p>
            <button onClick={() => props.handlePurchases(props.courses)} className="btn btn-success">Enroll now</button>

        </div>
    );
};

export default CourseDetails;