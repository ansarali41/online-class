import React from 'react';
import './CourseDetails.css'

const CourseDetails = (props) => {
    const { id, name, instructor, email, phone, fees, picture } = props.courses;

    return (
        <div className="course-details">
            <div className="img-container">
                <img src={picture} alt="" />
            </div>
            <div className="course-details-container">
                <h4>{props.courseNumber}. {name}</h4>
                <p>created by:{instructor}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Course Code: {id}</p>
                <p>price:${fees}</p>
                <button onClick={() => props.handlePurchases(props.courses)} className="btn btn-success">Enroll now</button>
            </div>

        </div>
    );
};

export default CourseDetails;