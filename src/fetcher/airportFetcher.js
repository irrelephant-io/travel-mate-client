import airportsMock from './../data/test.airports.json';

import { useState, useEffect } from 'react';

function useAirports() {
    const [airports, setAirports] = useState(null);
    
    useEffect(() => {
	fetchAirports().then(setAirports);
    }, []);

    return [airports, (_) => {}];
}

function fetchAirports(searchString = null) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const matchingAirports = searchString == null
                ? airportsMock
                : airportsMock.filtery(port => port.name.toLowerCase().includes(searchString));
            res(matchingAirports)
        }
        , 1000);
    })
}

export default useAirports;
