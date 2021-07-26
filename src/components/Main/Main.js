import React, { useContext } from "react";
import Country from "../Country/Country.js";
import { CountryContext } from "../../context/globalState";
import styles from "./Main.module.css";
import MapChart from "./MapChart.js";

const Main = () => {
  const { countries } = useContext(CountryContext);

  return countries ? (
    <React.Fragment>
      <main className={styles.main}>
        <div>
          <MapChart />
        </div>
        <React.Fragment>
          {/* {countries.map((country) => {
            return ( */}
          <iframe
            width="600"
            title="googlemap"
            height="450"
            loading="lazy"
            allowfullscreen="true"
            src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBTvHRVXRkSLuWh6NdUJgujTSSVJVjFVP4
      &q=countries"
          ></iframe>
          {/* );
          })} */}
        </React.Fragment>
        {countries.map((country) => {
          return (
            <Country
              alpha3Code={country.alpha3Code}
              countryName={country.name}
              countryFlag={country.flag}
              countryPopulation={country.population}
              countryRegion={country.region}
              countryCapital={country.capital}
              topLevelDomain={country.topLevelDomain}
              nativeName={country.nativeName}
              subregion={country.subregion}
              borders={country.borders}
              currencies={country.currencies}
              languages={country.languages}
              key={country.alpha3Code}
            />
          );
        })}
      </main>
    </React.Fragment>
  ) : (
    <div> No Countries to list </div>
  );
};
export default Main;
