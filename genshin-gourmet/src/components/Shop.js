import React from 'react';
import './styles.css';
import shop1 from '../img2/shop1.png';
import shop2 from '../img2/shop2.png';
import shop3 from '../img2/shop3.png';

const Shop = () => {
    return (
        <section className="shop" id="shop">
            <div className="heading">
                <span>View Regions</span>
                <h1>View Recipes</h1>
            </div>
            <div className="region-container">
                <div className="box">
                    <div className="box-img">
                        <img src={shop1} alt="Liyue" />
                    </div>
                    <div className="stars">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                    </div>
                    <h2>Liyue</h2>
                    <a href="#" className="btn">View Region</a>
                </div>

                <div className="box">
                    <div className="box-img">
                        <img src={shop2} alt="Inazuma" />
                    </div>
                    <div className="stars">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                    </div>
                    <h2>Inazuma</h2>
                    <a href="#" className="btn">View Region</a>
                </div>

                <div className="box">
                    <div className="box-img">
                        <img src={shop3} alt="Sumeru" />
                    </div>
                    <div className="stars">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                    </div>
                    <h2>Sumeru</h2>
                    <a href="#" className="btn">View Region</a>
                </div>
            </div>
        </section>
    );
};

export default Shop;
