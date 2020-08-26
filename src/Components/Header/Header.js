import React from 'react';
import logo from '../../images/logo.jpg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <div>
                <img src={logo} alt=""/>
            </div>
            <nav>
                <a href="/home">Home</a>
                <a href="/Notifications">Notifications</a>
                <a href="Manage-course">Manage Course</a>
            </nav>
        </div>
    );
};

export default Header;