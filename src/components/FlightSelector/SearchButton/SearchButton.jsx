import React from 'react';
import s from './SearchButton.module.css';
import { NavLink } from 'react-router-dom';

const SearchButton = (props) => {
    return (
        <div className={s.buttonContainer}>
            <NavLink to={props.btnNavLink}>
                <button>{props.btnText}</button>
            </NavLink>
        </div>
    )
}

export default SearchButton;