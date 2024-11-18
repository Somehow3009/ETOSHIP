// TripList.js
import React from 'react';
import TripItem from './TripItem';

const TripList = ({ trips }) => {
  return (
    <div className='card'>
        
      <h2>Trip History</h2>
      {trips.map((trip, index) => (
        <TripItem 
          key={index}
          title={trip.title}
          date={trip.date}
          price={trip.price}
        />
      ))}
    
    </div>
    
  );
};

export default TripList;
