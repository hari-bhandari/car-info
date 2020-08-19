import React from 'react';
import './CarAnimation.css'
import car from './images/car.png'
import wheel from './images/wheel.png'
import SearchBar from "./SearchBar";

const CarAnimation = () => {
    return (
        <body>
        <div className="hero">
            <SearchBar/>
            <div className="highway"></div>
            <div className="city"></div>
            <div className="car">
                <img src={car} alt="moving car"/>
            </div>
            <div className="wheel">
                <img src={wheel} alt="back-wheel" className="back-wheel"/>
                <img src={wheel} alt="front-wheel" className="front-wheel"/>

            </div>

        </div>
        </body>
    );
};

export default CarAnimation;