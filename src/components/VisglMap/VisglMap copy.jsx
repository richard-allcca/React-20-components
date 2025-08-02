import React, { useId } from 'react';
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';
import provincesGeoJSON from './data/argentina-provinces.json';

const mapContainerStyle = {
  height: "100vh",
  width: "100%"
};

const center = {
  lat: -38.4161,
  lng: -63.6167
};

const colors = [
  "lightblue",
  "lightgreen",
  "lightcoral",
  "lightgoldenrodyellow",
  "lightpink",
  "lightcyan",
  "lightsalmon",
  // Agrega más colores según el número de provincias
];

const VisglMap = () => {
  const UUID = () => useId();

  const getProvinces = () => {
    return provincesGeoJSON.features.map((feature, featureIndex) => {
      const coordinates = feature.geometry.type === 'Polygon'
        ? [feature.geometry.coordinates[0]]
        : feature.geometry.coordinates.map(polygon => polygon[0]);

      return coordinates.map((coords, index) => (
        <Polygon
          key={`${UUID()}-${index}`}
          paths={coords.map(coord => ({
            lng: coord[0],
            lat: coord[1]
          }))}
          options={{
            fillColor: colors[featureIndex % colors.length],
            fillOpacity: 0.5,
            strokeColor: "blue",
            strokeOpacity: 1,
            strokeWeight: 2
          }}
        />
      ));
    });
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyByn8MlSO-w4TLRerlr2JpiZJ5jQo_Ysv8">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={5}
      >
        {getProvinces()}
      </GoogleMap>
    </LoadScript>
  );
};

export default VisglMap;