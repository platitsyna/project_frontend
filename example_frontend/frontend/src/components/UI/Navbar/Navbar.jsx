import React from 'react';
import Menu from "../Menu/Menu";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Feedback service</h1>
            <Menu/>
        </div>
    );
};

export default Navbar;