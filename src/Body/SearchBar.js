import React from 'react';
import './SearchBar.css'
const SearchBar = () => {
    return (
        <form onSubmit="event.preventDefault();" role="search">
            <label htmlFor="search">Search for stuff</label>
            <input id="search" type="search" placeholder="Search..." autoFocus required/>
            <button type="submit">Go</button>
        </form>
    );
};

export default SearchBar;