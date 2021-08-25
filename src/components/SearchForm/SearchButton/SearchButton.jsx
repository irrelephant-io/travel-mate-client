import React from 'react';
import s from './SearchButton.module.css';
import { NavLink } from 'react-router-dom';

const SearchButton = () => {
    return (
        <div className={s.buttonContainer}>
            <NavLink to="/result">
                <button>Search</button>
            </NavLink>
        </div>
    )
}

export default SearchButton;