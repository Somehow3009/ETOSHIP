// TripItem.js
import React from 'react';
import './TripItem.css';

const TripItem = ({ title, date, price }) => {
  return (
    <div className="trip-item">
      <div>
        <strong>{title}</strong>
        <div>{date}</div>
      </div>
      <div className="trip-price">${price}</div>
    </div>
  );
};

export default TripItem;
