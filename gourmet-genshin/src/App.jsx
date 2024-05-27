import React from 'react';
import './style.css';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Recipes from './components/Recipes';
import Regions from './components/Regions';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Shop />
      <Recipes />
      <Regions />
      <About />
      <Contact />
    </>
  );
}

export default App;
