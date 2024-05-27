import React from 'react';
import logo from '../img2/logo.png'
import '../styles/style.css'
import '../main.js'

function Head() {
  return (
    <header>
        <a href="#" class="logo"><img src={logo} alt=""/></a>
        <div class="bx bx-menu" id="menu-icon"></div>
        <ul class="navbar">
            <li><a href="#home">Home</a></li>
            <li><a href="#recipes">Recipes</a></li>
            <li><a href="#regions">Regions</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

    </header>
  );
}

export default Head;