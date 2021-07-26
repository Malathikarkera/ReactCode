import React from "react";
import SearchCountry from "../components/searchCountry/searchCountry";
import FilterButton from "../components/filterButton/FilterButton";
import Main from "./Main/Main.js";
import Map from "./Main/Map.js";
import styles from "../globalStyles.css";

const Home = ({ ...props }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navBottom}>
          <SearchCountry />
          <FilterButton />
        </div>
        <Main />
        <Map />
      </div>
    </>
  );
};
export default Home;
