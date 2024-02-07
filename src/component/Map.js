import React from 'react'
import GoogleMapReact from 'google-map-react';
import './map.css'
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export const Map = () => {
    const defaultProps = {
        center: {
          lat: -22.9672778,
          lng: 30.44825
        },
        zoom: 11
      };
  return (
    // Important! Always set the container height explicitly
    <div  className='map-box'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBOLOIMxaJwTJDMgaSC4j12RnqJGrCWW-w" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={-22.9672778}
          lng={30.44825}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
