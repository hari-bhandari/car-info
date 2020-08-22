import React, {useContext, useEffect, useState} from 'react';
import CarContext from '../context/CarInformation/carContext'
import './AboutMe.css'
const AboutCar = () => {
    const carContext=useContext(CarContext)
    const{getData,info}=carContext

        useEffect(()=>{
            getData("AD57ZFF")
        },[])

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
                            <p>Marked For Export: {info.markedForExport}</p>
                            <p>Fuel Type: {info.fuelType}</p>
                            <p>Vehicle Colour : {info.colour}</p>
                            <p>Tax Due Date: {info.taxDueDate}</p>
                            <p>Tax status : {info.taxStatus}</p>
                            <p>V5C Issued : {info.dateOfLastV5CIssued}</p>
                            <p>MOT expiry Date: {info.motExpiryDate}</p>
                            <p>Wheel Plan: {info.wheelplan}</p>
                            <p>First Registration: {info.monthOfFirstRegistration}</p>
                        </div>
                        <div className="section-fluid desc-sec accor-2">
                            <div className="section-inline">
                                <p><span>76</span>cm<br/>Length</p>
                            </div>
                            <div className="section-inline">
                                <p><span>68</span>cm<br/>Width</p>
                            </div>
                            <div className="section-inline">
                                <p><span>87</span>cm<br/>Height</p>
                            </div>
                            <div className="section-inline">
                                <p><span>10</span>kg<br/>Weight</p>
                            </div>
                        </div>
                    </div>
                </div>
                <input className="color-btn for-color-1" type="radio" id="color-1" name="color-btn" checked/>

                <div className="img-wrap chair-1"></div>


                <a href="https://front.codes/" className="logo" target="_blank">
                    <img src="https://assets.codepen.io/1462889/fcy.png" alt=""/>
                </a>
            </div>
        </div>)
    );
};

export default AboutCar;