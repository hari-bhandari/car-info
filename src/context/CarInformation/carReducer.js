import {GET_VEHICLE_INFO, GET_VEHICLE_INFO_ERROR, REMOVE_ERROR} from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_VEHICLE_INFO:
            return {
                ...state,
                info:action.payload,
                loaded:true
            }
        case GET_VEHICLE_INFO_ERROR:
            return {
                ...state,
                error:action.payload,
                loaded: true
            }
        case REMOVE_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state

    }
}