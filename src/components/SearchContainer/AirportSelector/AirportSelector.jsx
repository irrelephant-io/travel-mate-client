import React from 'react';

import s from './AirportSelector.module.css';

import airportFetcher from '../../../fetcher/airportFetcher'

const AirportSelector = () => {
    return (
        <div className={s.airportSelectorContainer}>
            <div>
                <div className={s.searchBarContainer}>
                    <input type="text" class={s.input} id="name" placeholder="Where do you start?" required="" onChange={airportFetcher}/>
                    <label for="name" class={s.label}>Where do you start?</label>
                </div>
            </div>
        </div>

    );
}

export default AirportSelector;