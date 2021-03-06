
import React, { useReducer } from 'react';
import axios from 'axios';
import CarContext from './carContext';
import carReducer from './carReducer';

import {
    GET_VEHICLE_INFO, GET_VEHICLE_INFO_ERROR, REMOVE_ERROR
} from '../types'
const CarState=props=>{
    const initialState = {
        info: null,
        loaded: false,
        error: null
    };

    const[state,dispatch]=useReducer(carReducer,initialState)

    const getData=async (number)=>{
        const config = {
            headers: {
                'Content-Type': 'application/json',
                "x-api-key":"hs8ZqgPMwb3rcFk8yeg15ti7zw7yLLQ1yKzt4z6i"
            }
        };
        const formData = {"registrationNumber":number};
        try {
            const res = await axios.post('https://no--cors.herokuapp.com/cors?url=https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles', formData, config);
            console.log(res)
            dispatch({
                type:GET_VEHICLE_INFO,
                payload:res.data
            })

        } catch (err) {
            if(err.response.status){
            if(err.response.status == 400){
                dispatch({
                    type:GET_VEHICLE_INFO_ERROR,
                    payload:"The vehicle registration number you provided doesn't exist"
                })
            }
            else {
                dispatch({
                    type: GET_VEHICLE_INFO_ERROR,
                    payload: err.response.data.message
                })
            }
        }}
    }
    const removeError=()=>{
        dispatch({
            type:REMOVE_ERROR
        })
    }
    return(
        <CarContext.Provider value={{
            info:state.info,
            loaded:state.loaded,
            error:state.error,
            getData,removeError

        }}>{props.children}</CarContext.Provider>
    )


}
export default CarState;