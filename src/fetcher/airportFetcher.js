import airportsMock from './../data/test.airports.json';

import { useState, useEffect } from 'react';

function useAirports() {
    const [airports, setAirports] = useState([]);
    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        if (searchString === '') { setAirports([]) }
        else {
            fetchAirports(searchString).then(setAirports);
        }

    }, [searchString]);

    return [airports, setSearchString];
}

function fetchAirports(searchString = null) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const matchingAirports = searchString == null
                ? airportsMock
                : airportsMock.filter(port => port.name.toLowerCase().includes(searchString.toLowerCase()));
            res(matchingAirports)
        }
            , 1000);
    })
}

export default useAirports;
