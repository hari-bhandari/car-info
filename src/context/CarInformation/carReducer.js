import {GET_VEHICLE_INFO, GET_VEHICLE_INFO_ERROR} from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_VEHICLE_INFO:
            return {
                ...state,
                info:action.payload
            }
        case GET_VEHICLE_INFO_ERROR:
            return {
                ...state,
                error:action.payload
            }
        default:
            return state

    }
}