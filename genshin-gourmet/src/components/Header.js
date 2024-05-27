import React from 'react';
import './styles.css';
import logo from '../img2/logo.png';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <a href="#" className="logo"><img src={logo} alt="Logo" /></a>
            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`navbar ${menuOpen ? 'active' : ''}`}>
                <li><Link to="home" smooth={true} duration={1000}>Home</Link></li>
                <li><Link to="recipes" smooth={true} duration={1000}>Recipes</Link></li>
                <li><Link to="regions" smooth={true} duration={1000}>Regions</Link></li>
                <li><Link to="about" smooth={true} duration={1000}>About Us</Link></li>
                <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
            </ul>
        </header>
    );
};

export default Header;
