import React, { useContext } from "react";
import Country from "../Country/Country.js";
import { CountryContext } from "../../context/globalState";
import styles from "./Main.module.css";

const Map = () => {
  const { countries } = useContext(CountryContext);

  return countries ? (
    <React.Fragment>
      <Map className={styles.main}>
        {countries.map((country) => {
          return (
            //
            // <Country
            //   alpha3Code={country.alpha3Code}
            //   countryName={country.name}
            //   countryFlag={country.flag}
            //   countryPopulation={country.population}
            //   countryRegion={country.region}
            //   countryCapital={country.capital}
            //   topLevelDomain={country.topLevelDomain}
            //   nativeName={country.nativeName}
            //   subregion={country.subregion}
            //   borders={country.borders}
            //   currencies={country.currencies}
            //   languages={country.languages}
            //   key={country.alpha3Code}
            // />
            //console.log(country.name);
            <iframe
              width="600"
              title="googlemap"
              height="450"
              loading="lazy"
              allowfullscreen="true"
              src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBTvHRVXRkSLuWh6NdUJgujTSSVJVjFVP4
      &q={country.name}"
            ></iframe>
          );
        })}
      </Map>
    </React.Fragment>
  ) : (
    <div>No </div>
  );
};
export default Map;
