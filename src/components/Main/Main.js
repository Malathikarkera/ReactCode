import React, { useContext } from "react";
import Country from "../Country/Country.js";
import { CountryContext } from "../../context/globalState";
import styles from "./Main.module.css";
import MapChart from "./MapChart.js";
import MapWithMarkers from "./MapWithMarkers.js";
import { useLoadScript } from "@react-google-maps/api";

const Main = () => {
  const { countries } = useContext(CountryContext);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBTvHRVXRkSLuWh6NdUJgujTSSVJVjFVP4" // Add your API key
  });
  return countries ? (
    <React.Fragment>
      <main className={styles.main}>
        <React.Fragment>
          <div>
            <MapChart />
          </div>
        </React.Fragment>

        <React.Fragment>{/* <MapWithMarkers /> */}</React.Fragment>
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
