import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import s from './AirportSelector.module.css';

import useAirports from '../../../fetcher/airportFetcher';

const FromSelector = (props) => {
    const [airports, setSearchString] = useAirports();
    const setSearchStringDebounced = useDebouncedCallback(setSearchString, 500);

    return (
        <div className={s.searchFrom}>
            <input
                type="text"
                className={s.input}
                id="from"
                placeholder={props.placeholder}
                required=""
                onChange={e => setSearchStringDebounced(e.target.value)}
            />
            <label htmlFor="from" className={s.label}>{props.placeholder}</label>

            {!!airports.length && <div className={s.matchList}>{airports.map(ap => {
                return (
                    <a className={s.dataItem} href="/#" target="_blank">
                        <p>{ap.name}</p>
                    </a>
                )
            })}</div>}

        </div>
    );
}

export default FromSelector;
