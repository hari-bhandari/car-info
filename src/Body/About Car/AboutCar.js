import React, {useContext, useEffect} from 'react';
import logo from '../images/logo1.png'
import CarContext from '../../context/CarInformation/carContext'
import './AboutMe.css'
const AboutCar = (props) => {
    const carContext=useContext(CarContext)
    const{info}=carContext
    useEffect(()=>{
        if(!info){
            props.history.push('/')
        }
    },[info])

    return (
        info&&(
        <div className="section-fluid-main">
            <div className="section">
                <div className="info-wrap mob-margin">
                    <p className="title-up">{info.yearOfManufacture}</p>
                    <h2>{info.make}</h2>
                    <h5>MOT Status:{info.motStatus}</h5>
                    <div className="section-fluid">
                        <input className="desc-btn" type="radio" id="desc-1" name="desc-btn" checked/>
                        <div className="section-fluid desc-sec accor-1">
                            <p>CO2 Emissions : {info.co2Emissions}</p>
                            <p>Engine Capacity: {info.engineCapacity}</p>
                            <p>Fuel Type: {info.fuelType}</p>
                            <p>Vehicle Colour : {info.colour}</p>
                            <p>Tax Due Date: {info.taxDueDate}</p>
                            <p>Tax status : {info.taxStatus}</p>
                            <p>V5C Issued : {info.dateOfLastV5CIssued}</p>
                            <p>MOT expiry Date: {info.motExpiryDate}</p>
                            <p>Wheel Plan: {info.wheelplan}</p>
                            <p>First Registration: {info.monthOfFirstRegistration}</p>
                        </div>

                    </div>
                </div>
                <input className="color-btn for-color-1" type="radio" id="color-1" name="color-btn" checked/>

                <div className="img-wrap chair-1"></div>
                <div className="btn-container">
                    <div className="btn">Tax due Date: {info.taxDueDate}</div>
                    <div className="btn">Mot certificate expiry date: {info.motExpiryDate}</div>
                </div>

                <a href="https://haribhandari.me" className="logo" target="_blank">
                    <img src={logo} alt=""/>
                </a>
            </div>
        </div>)
    );
};

export default AboutCar;