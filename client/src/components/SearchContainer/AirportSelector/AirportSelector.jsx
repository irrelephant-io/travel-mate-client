import React from 'react';

import airports from '../../../data/test.airports.json'
import logo from '../../../assets/images/airport_logo.png'

import s from './AirportSelector.module.css';

const AirportSelector = () => {
    return (
        <div className={s.airportSelectorContainer}>
            <div>
                <div classname={s.searchBarContainer}>
                    <input type="text" class={s.input} id="name" placeholder="Where do you start?" required="" />
                    <label for="name" class={s.label}>Where do you start?</label>
                </div>
                <main className={s.searchResultContainer}>
                    {airports.map(port =>
                        <article className={s.searchResultItem}>
                            <img src={logo} alt={port.name} className={s.searchResultImage} />
                            <span className={s.searchResultTitle}>{port.name}</span>
                            <span className={s.searchResultCountryCode}>{port.id}</span>
                        </article>
                    )}
                </main>
            </div>
        </div>

    );
}

export default AirportSelector;