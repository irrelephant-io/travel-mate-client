import React from 'react';
import FromSelector from './FromSelector/FromSelector';
import ToSelector from './ToSelector/ToSelector';
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
                <FromSelector />
                <ToSelector />
                <Calendar />
                <SearchButton />
            </div>
        </form>
    );
}

export default SearchContainer;