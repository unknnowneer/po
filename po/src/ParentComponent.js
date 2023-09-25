import React, { useState } from 'react';
import MapWithInfoBlock from './MapWithInfoBlock';

function CalendarBlock() {
  const currentDate = new Date();

  // Функция для форматирования даты в "DD.MM.YYYY"
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}.${month}.${year}`;
  };

  const [selectedDate, setSelectedDate] = useState(formatDate(currentDate));

  return (
    <div>
      <input
        type="text"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    </div>
  );
}

const ParentComponent = () => {
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());

  function getCurrentDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return day + month + year;
  }

  function handleDateChange(newDate) {
    setSelectedDate(newDate);
  }

  return (
    <div>
      <div className="map-wrapper">
        <MapWithInfoBlock selectedDate={selectedDate} />
      </div>
      <div className="calendar-block">
        <h3>Выберите дату:</h3>
        <CalendarBlock />
        <button onClick={() => handleDateChange('New Date')}>Изменить дату</button>
      </div>
    </div>
  );
};

export default ParentComponent;