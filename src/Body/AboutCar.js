import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './AboutMe.css'
const AboutCar = (number) => {
    const[response,setResponse]=useState('')

        useEffect(()=>{
            getData("AD57ZFF")
        },[])

    return (
        <div className="section-fluid-main">
            <div className="section">
                <div className="info-wrap mob-margin">
                    <p className="title-up">Modern chair</p>
                    <h2>Sella Gastro</h2>
                    <h4>$174 <span>$237</span></h4>
                    <div className="section-fluid">
                        <input className="desc-btn" type="radio" id="desc-1" name="desc-btn" checked/>
                        <label htmlFor="desc-1">Description</label>
                        <input className="desc-btn" type="radio" id="desc-2" name="desc-btn"/>
                        <label htmlFor="desc-2">Details</label>
                        <div className="section-fluid desc-sec accor-1">
                            <p>The chair construction is made of ash tree. Upholstery and wood color at customer's request.</p>
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
        </div>
    );
};

export default AboutCar;