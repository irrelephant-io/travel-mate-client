import React from 'react';
import AirportSelector from './AirportSelector/AirportSelector';
import DatePicker from './DatePicker/DatePicker';
import SearchButton from './SearchButton/SearchButton';

import s from './FlightSelector.module.css';

const SearchContainer = (props) => {
    return (
        <form className={s.searchForm} autocomplete="off">
            <fieldset>
                <legend>Find a flexible flight for your next trip.</legend>
            </fieldset>
            <div className={s.innerForm}>
                <AirportSelector placeholder={props.placeholder} />
                <DatePicker />
                <SearchButton btnText={props.btnText} btnNavLink={props.btnNavLink} />
            </div>
        </form>
    );
}

export default SearchContainer;