import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import s from './FromSelector.module.css';

import useAirports from '../../../fetcher/airportFetcher';

const FromSelector = () => {
    const [airports, setSearchString] = useAirports();
    const setSearchStringDebounced = useDebouncedCallback(setSearchString, 500);

    if (airports == null) {
        return <span>Loading...</span>;
    }

    return (
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
            <div>{airports.map(ap => <span>{ap.name}</span>)}</div>
        </div>
    );
}

export default FromSelector;
