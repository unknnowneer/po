import React, { useState, useEffect }from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const position = [55.030199, 82.920430];


const TextOverlay = ({ text, onChange }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '100px',
        left: '10px',
        zIndex: '1000',
        background: '#2196F3',
        color: 'white',
        borderRadius: '5px',
        padding: '10px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        style={{
          border: 'none',
          background: 'white',
          color: '#2196F3',
          padding: '5px',
          borderRadius: '3px',
          fontSize: '14px',
        }}
      />
    </div>
  );
};
const CalendarOverlay = ({ date, onChange }) => {
  return (
    <div
    style={{
      position: 'absolute',
      top: '10px',
      left: '10px',
      zIndex: '1000',
      background: '#2196F3',
      color: 'white',
      borderRadius: '5px',
      padding: '10px',
      fontFamily: 'Arial, sans-serif',
    }}
  >
    {/* Ваша разметка календаря */}
    <input
      type="date"
      value={date}
      onChange={(e) => onChange(e.target.value)}
      style={{
        border: 'none',
        background: 'white',
        color: '#2196F3',
        padding: '5px',
        borderRadius: '3px',
        fontSize: '14px',
      }}
      />
    </div>
  );
};

const ParentComponent = () => {
  const [text, setText] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const handleTextChange = (text) => {
    setText(text);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    setSelectedDate(new Date().toISOString().split('T')[0]);
  }, []);

  return (
    <div>
      
      <MapContainer center={position} zoom={13} style={{ height: '800px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
          <TextOverlay text={text} onChange={handleTextChange} />
        </Marker>
       <Marker position={position}>
        <CalendarOverlay date={selectedDate} onChange={handleDateChange} />
      </Marker>
      
       <Marker position={position}>
          <Popup>{text}</Popup>
        </Marker>
    </MapContainer>
    </div>
  );
};

export default ParentComponent;
