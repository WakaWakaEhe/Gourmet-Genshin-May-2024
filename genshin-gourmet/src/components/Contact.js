import React from 'react';
import './styles.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="social">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaYoutube /></a>
            </div>
            <div className="links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
                <a href="#">Our Company</a>
            </div>
            <p>&#169; All Rights Reserved.</p>
        </section>
    );
};

export default Contact;
