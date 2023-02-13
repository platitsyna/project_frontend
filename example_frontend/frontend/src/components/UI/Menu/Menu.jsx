import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Menu.css'


const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);

    return (
        <div className='menu'>
            <button onClick={toggleMenu}>user-menu</button>
            {isMenuOpen && (
                <div className="links">
                <Link to="/profile">Profile</Link>
                <Link to="/characteristics">Characteristics</Link>
                <Link to="/objects">Objects</Link>
                </div>
            )}
        </div>
    );
};

export default Menu;