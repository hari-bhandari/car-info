import React from 'react';
import './CarAnimation.css'
import car from '../images/car.png'
import wheel from '../images/wheel.png'
import SearchBar from "../Search Bar/SearchBar";
import logo from "../images/logo1.png";

const CarAnimation = (props) => {
    return (

        <body>
        <div className="hero">
            <SearchBar props={props}/>
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
        <a href="https://haribhandari.me" className="logo" target="_blank">
            <img src={logo} alt=""/>
        </a>

        </body>
    );
};

export default CarAnimation;