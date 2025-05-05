import React, { useId } from 'react';
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';
import provincesGeoJSON from './data/argentina-provinces.json';
import './VisglMap.css';

const mapContainerStyle = {
  height: "100vh",
  width: "100%"
};

const center = {
  lat: -38.4161,
  lng: -63.6167
};

// Límites corregidos para abarcar todo el territorio argentino
const argentinaBounds = {
  north: -21.0,  // Extremo norte (Jujuy)
  south: -57.0,  // Extremo sur (Tierra del Fuego)
  // west: -75.0,   // Extremo oeste (frontera con Chile) - A la izquierda del navegador
  west: -100.0,   // Extremo oeste (frontera con Chile) - Centrado en el navegador
  east: 50.0    // Extremo este (costa atlántica e Islas Malvinas)
};

// Estilo personalizado para que el mapa se parezca a la imagen de ejemplo
const mapStyles = [
  {
    featureType: "all", // Aplica a todos los elementos
    elementType: "all",
    stylers: [
      { visibility: "off" } // Oculta todo por defecto
    ]
  },
  {
    featureType: "water", // Muestra el agua
    elementType: "geometry",
    stylers: [
      { visibility: "off" },
      { color: "#b3d9ff" } // Color azul claro para el agua, similar al de la imagen de ejemplo
    ]
  },
  {
    featureType: "landscape", // Fondo del mapa
    elementType: "geometry",
    stylers: [
      { visibility: "on" },
      { color: "#f0f0f0" } // Fondo gris claro, similar al de la imagen de ejemplo
    ]
  }
];

const colors = [
  "#add8e6", // Light blue
  "#90ee90", // Light green
  "#f08080", // Light coral
  "#fafad2", // Light goldenrod yellow
  "#ffb6c1", // Light pink
  "#e0ffff", // Light cyan
  "#ffa07a", // Light salmon
  "#b0e0e6", // Powder blue
  "#98fb98", // Pale green
  "#ff4040", // Red
  // Agrega más colores si tienes más provincias
];

const VisglMap = ({ zoom = 4.7 }) => {
  const UUID = () => useId();

  const getProvinces = () => {
    return provincesGeoJSON.features.map((feature, featureIndex) => {
      const coordinates = feature.geometry.type === 'Polygon'
        ? [feature.geometry.coordinates[0]]
        : feature.geometry.coordinates.map(polygon => polygon[0]);

      const provinceName = feature.properties.nombre; // Obtener el nombre de la provincia


      return coordinates.map((coords, index) => (
        <React.Fragment key={`${UUID()}-${index}`}>
          <Polygon
            paths={coords.map(coord => ({
              lng: coord[0],
              lat: coord[1]
            }))}
            options={{
              fillColor: colors[featureIndex % colors.length],
              fillOpacity: 0.5,
              strokeColor: "#0000ff", // Borde azul, como en la imagen de ejemplo
              strokeOpacity: 1,
              strokeWeight: 2
            }}
          />
          <div
            style={{
              position: 'absolute',
              transform: `translate(${coords[0][0]}px, ${coords[0][1]}px)`,
              color: "#000000",
              fontSize: "12px",
              fontWeight: "bold"
            }}
          >
            <p className='province-name' >{provinceName}</p>
          </div>
        </React.Fragment>
      ));
    });
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyByn8MlSO-w4TLRerlr2JpiZJ5jQo_Ysv8">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom} // Usar la propiedad zoom
        options={{
          restriction: {
            latLngBounds: argentinaBounds,
            strictBounds: true
          },
          styles: mapStyles,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          zoomControl: false // Oculta el control de zoom para un aspecto más limpio
        }}
      >
        {getProvinces()}
      </GoogleMap>
    </LoadScript>
  );
};

export default VisglMap;