
import React, { useReducer } from 'react';
import axios from 'axios';
import CarContext from './carContext';
import carReducer from './carReducer';
import setAuthToken from "../../utils/setAuthToken";

import {
    GET_VEHICLE_INFO, GET_VEHICLE_INFO_ERROR
} from '../types'
const CarState=props=>{
    const initialState = {
        info: null,
        loading: true,
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
            const res = await axios.post('vehicle-enquiry/v1/vehicles', formData, config);
            dispatch({
                type:GET_VEHICLE_INFO,
                payload:res.data
            })

        } catch (err) {
            dispatch({
                type:GET_VEHICLE_INFO_ERROR,
                payload:err.response.data.message
            })
        }




    }
    return(
        <CarContext.Provider value={{
            token:state.token,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            user:state.user,
            error:state.error,
            getData

        }}>{props.children}</CarContext.Provider>
    )


}
export default CarState;