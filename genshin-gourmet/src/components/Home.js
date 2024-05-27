import React from 'react';
import './styles.css';
import homeImg from '../img2/home.png';

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home-text">
                <span><h2>Gourmet Genshin</h2></span>
                <h1>Explore the cuisines of TEYVAT</h1>
                <span><h2>Liyue · Inazuma · Sumeru</h2></span>
                <a href="#" className="btn">Learn More</a>
            </div>
            <div className="home-img">
                <img src={homeImg} alt="Home" />
            </div>
        </section>
    );
};

export default Home;
