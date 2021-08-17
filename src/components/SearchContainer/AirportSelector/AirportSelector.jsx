import React from 'react';

import s from './AirportSelector.module.css';

import airportFetcher from '../../../fetcher/airportFetcher'
import { NavLink } from 'react-router-dom';

const AirportSelector = () => {
    return (
        <div className={s.airportSelectorContainer}>
            <div>
                <div className={s.searchBarContainer}>
                    <input type="text" class={s.input} id="from" placeholder="From?" required="" onChange={airportFetcher} />
                    <label for="from" class={s.label}>From?</label>
                    <input type="text" class={s.input} id="to" placeholder="To?" required="" onChange={airportFetcher} />
                    <label for="to" class={s.label}>To?</label>
                    <div className={s.buttonContainer}>
                        <NavLink to="/result">
                            <button>Search</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AirportSelector;