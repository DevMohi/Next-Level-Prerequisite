/* eslint-disable react/prop-types */

import { useState } from 'react';
import './Country.css'
const Country = ({country , handleVisitedCountry , handleFlags}) => {
    const {name, flags, population, area , cca3} = country;
    const [visited, setVisited] = useState(false);

    //Toggling 
    const handleVisited = () =>{
        setVisited(!visited); 
    }

    // console.log(handleVisitedCountry); 

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'Purple': 'white'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Code : {cca3}</p>
            <button onClick={() => handleFlags(flags.png)}>Add Flags</button>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
            {visited && "I have visited this country"}
        </div>
    );
};

export default Country;