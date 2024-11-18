import React from 'react';
import './detail.css';
import avt from './avatar.png'

function BookingDetailsCard() {
  return (
    <div className="card">
      <h2>Booking Details</h2>
        <div className="card-content">
            <div className="driver-info">
              <img 
                  src= {avt} 
                  alt="Driver Avatar"
                  className="avatar"
              />
              <div>
                  <p>Phu Minh</p>
                  <p className="role">Driver</p>
              </div>
            </div>
            <div className="trip-info">
            <div className="info-row">
                <span>ETA:</span>
                <span>15 minutes</span>
            </div>
            <div className="info-row">
                <span>Trip Fare</span>
                <span>$ 45.000</span>
            </div>
            </div>
        </div>
    </div>
    
    
  );
}

export default BookingDetailsCard;
