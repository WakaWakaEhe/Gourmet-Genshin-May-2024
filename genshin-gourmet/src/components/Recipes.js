import React from 'react';
import './styles.css';
import recipesImg from '../img2/recipes.jpg';

const Recipes = () => {
    return (
        <section className="recipes" id="recipes">
            <div className="heading">
                <span>view Now</span>
                <h1>Explore many unique recipes</h1>
            </div>
            <div className="container">
                <div className="recipes-img">
                    <img src={recipesImg} alt="Recipes" />
                </div>
                <div className="recipes-text">
                    <h2>Embark on a culinary journey</h2>
                    <p>Dive into the culinary wonders of Teyvat with our extensive recipe collection. From the savory dishes of Liyue to the exquisite flavors of Inazuma and the aromatic delicacies of Sumeru, our recipe section brings the diverse tastes of Genshin Impact to your kitchen.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Venim illo pa met consectetur adipiscing elit. Venim illo pa</p>
                    <a href="#" className="btn">Recipes</a>
                </div>
            </div>
        </section>
    );
};

export default Recipes;
