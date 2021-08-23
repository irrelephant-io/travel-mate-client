import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import s from './AirportSelector.module.css';

import useAirports from '../../../fetcher/airportFetcher';
import { NavLink } from 'react-router-dom';
import Calendar from './Calendar/Calendar';



const AirportSelector = () => {
    const [airports, setSearchString] = useAirports();
    const setSearchStringDebounced = useDebouncedCallback(setSearchString, 500);

    if (airports == null) {
        return <span>Loading...</span>;
    }

    return (
        <form className={s.airportSelectorContainer}>
            <fieldset>
                <legend>Find a flexible flight for your next trip.</legend>
            </fieldset>
            <div>
                <div className={s.searchBarContainer}>
                    <div className={s.searchFrom}>
                        <input
                            type="text"
                            className={s.input}
                            id="from"
                            placeholder="From?"
                            required=""
                            onChange={e => setSearchStringDebounced(e.target.value)}
                        />
                        <label htmlFor="from" className={s.label}>From?</label>
                    </div>
                    <div className={s.searchTo}>
                        <input type="text" className={s.input} id="to" placeholder="To?" required="" />
                        <label htmlFor="to" className={s.label}>To?</label>
                    </div>
                    <Calendar />
                    <div className={s.buttonContainer}>
                        <NavLink to="/result">
                            <button>Search</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div>{airports.map(ap => <span>{ap.name}</span>)}</div>
        </form>
    );
}

export default AirportSelector;
