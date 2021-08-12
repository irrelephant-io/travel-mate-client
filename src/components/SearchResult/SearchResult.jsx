import React from 'react';

import airports from '../../data/test.airports.json';
import logo from '../../assets/images/airport_logo.png';

import s from './SearchResult.module.css';

const SearchResult = (props) => {
    return (
        <div className={s.result}>
            <main className={s.searchResultContainer}>
                {airports.map(port =>
                    <article className={s.searchResultItem}>
                        <img src={logo} alt={port.name} className={s.searchResultImage} />
                        <span className={s.searchResultTitle}>{port.name}</span>
                        <span className={s.searchResultCountryCode}>{port.id}</span>
                    </article>
                )}
            </main>
            <div className={s.map}>
                <img alt="map" src="https://cdn.flightconnections.com/img/opengr.png" />
            </div>
        </div>
    );
}

export default SearchResult;