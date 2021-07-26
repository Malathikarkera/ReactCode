import React, { useContext, useState } from "react";
import { WorldMap } from "react-svg-worldmap";
import { CountryContext } from "../../context/globalState";

const data = [
  { country: "cn", value: 1389618778 }, // china
  { country: "in", value: 1311559204 }, // india
  { country: "us", value: 331883986 }, // united states
  { country: "id", value: 264935824 }, // indonesia
  { country: "pk", value: 210797836 }, // pakistan
  { country: "br", value: 210301591 }, // brazil
  { country: "ng", value: 208679114 }, // nigeria
  { country: "bd", value: 161062905 }, // bangladesh
  { country: "ru", value: 141944641 }, // russia
  { country: "mx", value: 127318112 } // mexico
];
const MapChart = () => {
  const { countries } = useContext(CountryContext);
  const data2 = countries
    .filter(function (item) {
      return item.population > 1;
    })
    .map(function ({ alpha2Code, population }) {
      return { country: alpha2Code, value: population };
    });

  console.log(countries);
  console.log(data2);
  console.log(data);

  countries.map((country) => {});

  return (
    <WorldMap
      color="red"
      title="Top 10 Populous Countries"
      value-suffix="people"
      size="lg"
      data={data2}
    />
  );
};

export default MapChart;
