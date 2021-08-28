import React from 'react';
import AirportSelector from './AirportSelector/AirportSelector';
import Calendar from './Calendar/Calendar';
import SearchButton from './SearchButton/SearchButton';

import s from './SearchForm.module.css';

const SearchContainer = () => {
    return (
        <form className={s.searchForm} autocomplete="off">
            <fieldset>
                <legend>Find a flexible flight for your next trip.</legend>
            </fieldset>
            <div className={s.innerForm}>
                <AirportSelector placeholder="From?"/>
                <AirportSelector placeholder="To?"/>
                <Calendar />
                <Calendar />
                <SearchButton />
            </div>
        </form>
    );
}

export default SearchContainer;