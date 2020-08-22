import React, {useState} from 'react';
import './SearchBar.css'
const SearchBar = () => {
    const[search,setSearch]=useState()
    const onSubmit=(e)=>{
        e.preventDefault()
    }
    return (
        <form onSubmit= role="search">
            <label htmlFor="search">Search for stuff</label>
            <input id="search" type="search" placeholder="Search..." onChange={(e)=>{
                setSearch(e.target.value)
            }} autoFocus required/>
            <button type="submit">Go</button>
        </form>
    );
};

export default SearchBar;