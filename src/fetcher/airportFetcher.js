import airportsMock from 'data/test.airports.json';

function fetchAirports(searchString = null) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const matchingAirports = searchString == null
                ? airportsMock
                : airportsMock.filter(port => port.name.toLowerCase().indexOf(searchString.toLowerCase()) != -1);
            res(matchingAirports)
        }
        , 100);
    })
}