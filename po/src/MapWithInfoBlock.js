import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const MapWithInfoBlock = ({ selectedDate }) => {
  const currentDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const position = [55.030199, 82.920430]
  return (
    <div className="map-wrapper">
      <div className="info-block">
        <h2>Текущая дата: {currentDate}</h2>
      </div>
      <MapContainer center={position} zoom={12}  scrollWheelZoom={false} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; OpenStreetMap contributors"/>
        <Marker position={position}>
          <Popup>
          <br /> 
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapWithInfoBlock;