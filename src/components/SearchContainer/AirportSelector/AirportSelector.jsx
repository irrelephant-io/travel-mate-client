import React, { useState } from 'react';
import s from './AirportSelector.module.css';

import airportFetcher from '../../../fetcher/airportFetcher'
import { NavLink } from 'react-router-dom';

const AirportSelector = () => {

    const [from, setFrom] = useState('');

    const getAirports = async (from) => {
        const res = await airportFetcher(from);
        // if (!res.ok) {
        //     throw new Error(`Could not fetch ${from}` + `, received ${res.status}`)
        // }
        return res;
    }

    getAirports(from)
        .then(res => console.log(res))
        .catch(err => console.error('Could not fetch', err))

    // let response = airportFetcher(from);
    // console.log(response)


    return (
        <div className={s.airportSelectorContainer}>
            <div>
                <div className={s.searchBarContainer}>
                    <input type="text" className={s.input} id="from" placeholder="From?" required="" onChange={e => setFrom(e.target.value)} />
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
        </div>

    );
}

export default AirportSelector;