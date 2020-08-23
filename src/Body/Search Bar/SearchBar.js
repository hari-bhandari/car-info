import React, {useContext, useEffect, useState} from 'react';
import './SearchBar.css'
import CarContext from "../../context/CarInformation/carContext";
import AlertContext from "../../context/alert/alertContext";

const SearchBar = ({props}) => {
    const carContext = useContext(CarContext)
    const {getData, info, loaded,error,removeError} = carContext
    const alertContext = useContext(AlertContext);

    const [search, setSearch] = useState('')
    useEffect(()=>{
        if(error){
            alertContext.setAlert(error)
            removeError()
        }
    },[error])
    useEffect(() => {
        if (loaded) {
            if (info) {
                if (info.registrationNumber.toLowerCase() == search.toLowerCase().replace(" ","")) {
                    props.history.push('/carInformation')
                } else {
                    alertContext.setAlert('This shouldn\'t have happened! Please try again')
                }
            } else {
                alertContext.setAlert('Server Error! Please try again later')
            }
        }

    }, [info])
    const onSubmit = async (e) => {
        e.preventDefault()
        await getData(search)
        if (info) {

        } else {

        }
    }
    return (
        <form onSubmit={onSubmit} role="search">
            <label htmlFor="search">Search for stuff</label>
            <input id="search" type="search" placeholder="Search..." onChange={(e) => {
                setSearch(e.target.value)
            }} autoFocus required/>
            <button type="submit">Go</button>
        </form>
    );
};

export default SearchBar;