import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{fontSize:'20px', fontWeight:'bold'}}>{text}</div>;

const SimpleMap = ({address, text}) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    
    const apiKey = 'AIzaSyBDRCNPjy70dHAZxplREN9nhp40_tsoobQ';

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          const loc = data.results[0].geometry.location;
          setLocation({ lat: loc.lat, lng: loc.lng });
        } else {
          console.error('No se encontraron resultados para la dirección proporcionada.');
        }
      })
      .catch(error => {
        console.error('Error al llamar a la API de Geocoding:', error);
      });
  }, [address,text]);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 17
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      {location ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBDRCNPjy70dHAZxplREN9nhp40_tsoobQ' }}
          defaultCenter={location}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={location.lat}
            lng={location.lng}
            text={text}
          />
        </GoogleMapReact>
      ) : (
        <div>Cargando mapa...</div>
      )}
    </div>
  );
};

export default SimpleMap;
