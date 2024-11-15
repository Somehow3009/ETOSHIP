import React from 'react';
import './trip.css';
import { FaCarSide } from "react-icons/fa";


function TripStatus() {
    return (
        <div className="trip-status-navbar">
            <div className="trip-status-content">
                <div>
                    <h3>Trip Status</h3>
                    <p className="status">On the way</p>
                </div>
                <span className='car-icon'> <FaCarSide /></span>
            </div>
        </div>
    );
}

export default TripStatus;
