import React, { useContext } from "react";
import { CountryContext } from "../../context/globalState";
import styles from "./Main.module.css";

const Map = () => {
  const { countries } = useContext(CountryContext);

  return countries ? (
    <React.Fragment>
      <Map className={styles.main}>
        {countries.map((country) => {
          return (
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
