import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>NavBar</h2>
            <nav class="nav">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                <NavLink to="/users" className="nav-link">Our Users</NavLink>
                <NavLink to="/posts" className="nav-link">Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;