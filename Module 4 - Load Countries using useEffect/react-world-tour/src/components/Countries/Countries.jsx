import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  //sending it as a child and use this state in another component
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("add this to your visited country");
    // console.log(country);
    //dom doesnt allow to push an array so we need to copy the new array and push it
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleFlags = (flag) => {
    // console.log("Flag"); 
    console.log(flag)
    const newFlags = [...flags, flag];
    setFlags(newFlags);
  };

  //remove - filter and remove item from an array in a state
  //use filter to select all the elments you want to remove

  return (
    <div>
      <h3>Countries: {countries.length} </h3>
      <div>
        <h4>Visited Countries: {visitedCountries.length}</h4>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div className="flag-container">
            {
                flags.map((flag, idx) => <img key= {idx} src={flag}></img>)
            }
      </div>

      {/* Display countries  */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            //parameter pataite hoile arrow function use kora lagbe
            handleVisitedCountry={handleVisitedCountry}
            handleFlags={handleFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

