import React, { useContext } from "react";
import { WorldMap } from "react-svg-worldmap";
import { CountryContext } from "../../context/globalState";

const MapChart = () => {
  const { countries } = useContext(CountryContext);
  const data = countries
    .filter(function (item) {
      return item.population > 0;
    })
    .map(function ({ alpha2Code, population }) {
      return { country: alpha2Code, value: population };
    });

  console.log(countries);
  console.log(data);

  return (
    <WorldMap
      color="red"
      title="Data Visulaization of Countries with population"
      value-suffix="people"
      size="lg"
      data={data}
    />
  );
};

export default MapChart;
