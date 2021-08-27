import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import s from './FromSelector.module.css';

import useAirports from '../../../fetcher/airportFetcher';

const FromSelector = () => {
    const [airports, setSearchString] = useAirports();
    const setSearchStringDebounced = useDebouncedCallback(setSearchString, 500);

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

            <div className={s.matchList}>
                {airports !== null && airports.map(ap => {
                    return (
                        <a className={s.dataItem} href="/#" target="_blank">
                            <p>{ap.name}</p>
                        </a>
                    )
                }) || <span>Loading...</span>}
                
            </div>
        </div>
    );
}

// return (
//     <div className="search">
//       <div className="searchInputs">
//         <input
//           type="text"
//           placeholder={placeholder}
//           value={wordEntered}
//           onChange={handleFilter}
//         />
//         <div className="searchIcon">
//           {filteredData.length === 0 ? (
//             <SearchIcon />
//           ) : (
//             <CloseIcon id="clearBtn" onClick={clearInput} />
//           )}
//         </div>
//       </div>
//       {filteredData.length != 0 && (
//         <div className="dataResult">
//           {filteredData.slice(0, 15).map((value, key) => {
//             return (
//               <a className="dataItem" href={value.link} target="_blank">
//                 <p>{value.title} </p>
//               </a>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

export default FromSelector;
