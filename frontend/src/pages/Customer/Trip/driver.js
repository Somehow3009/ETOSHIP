import React from 'react';
import avt from './avatar.png'
import './trip.css'

function DriverInfor() {
  return (
    <div className="card">
      <h2>Drvier Information</h2>
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
            </div>
        </div>
    </div>
    
    
  );
}

export default DriverInfor;
