import airportsMock from './../data/test.airports.json';

function fetchAirports(searchString = null) {
    const value = searchString.target.value.toLowerCase();
    return new Promise((res, rej) => {
        setTimeout(() => {
            const matchingAirports = value == null
                ? airportsMock
                : airportsMock.filter(port => port.name.toLowerCase().includes(searchString));
            res(matchingAirports)
        }
        , 1000);
    })
}

export default fetchAirports;