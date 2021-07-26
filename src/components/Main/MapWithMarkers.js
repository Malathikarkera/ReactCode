import React, { useState, useContext } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { CountryContext } from "../../context/globalState";

function MapWithMarkers() {
  const [activeMarker, setActiveMarker] = useState(null);
  const { countries } = useContext(CountryContext);
  const markers = countries
    .filter(function (item) {
      return item.population > 0;
    })
    .map(function ({ alpha2Code, name, latlng }) {
      return {
        id: alpha2Code,
        name: name,
        position: { lat: latlng[0], lng: latlng[1] }
      };
    });
  console.log("markers");
  console.log(markers);
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100vw", height: "100vh" }}
    >
      {markers.map(({ id, name, position }) => (
        <Marker position={position} onClick={() => handleActiveMarker(id)}>
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}

export default MapWithMarkers;
