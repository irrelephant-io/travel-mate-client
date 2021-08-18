import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import s from './AirportSelector.module.css';

import useAirports from '../../../fetcher/airportFetcher';
import { NavLink } from 'react-router-dom';



const AirportSelector = () => {
    const [airports, setSearchString] = useAirports();
    const setSearchStringDebounced = useDebouncedCallback(setSearchString, 500);
    
    if (airports == null) {
	return <span>Loading...</span>;
    }

    return (
        <div className={s.airportSelectorContainer}>
            <div>
                <div className={s.searchBarContainer}>
                    <input
			type="text"
			className={s.input}
			id="from"
			placeholder="From?"
			required=""
			onChange={e => setSearchStringDebounced(e.target.value)}
		    />
                    <label htmlFor="from" className={s.label}>From?</label>
                    <input type="text" className={s.input} id="to" placeholder="To?" required="" />
                    <label htmlFor="to" className={s.label}>To?</label>
                    <div className={s.buttonContainer}>
                        <NavLink to="/result">
                            <button>Search</button>
                        </NavLink>
                    </div>
                </div>
            </div>
	    <div>{airports.map(ap => <span>{ap.name}</span>)}</div>
        </div>
    );
}

export default AirportSelector;
