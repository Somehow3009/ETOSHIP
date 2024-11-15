import React from 'react';
import avt from './avatar.png'


function CustomerInformation() {
  return (
    <div className="card">
       <div className="profile-card">
            <div className="profile-header">
                <img 
                    src={avt}
                    className="avatar"
                />
                <div>
                    <h3>Hong Ngoc</h3>
                    <p className="customer-since">Customer since: 2024</p>
                </div>
            </div>
            <div className="profile-info">
                <p className="label">Name</p>
                <p>Tran Thi Hong Ngoc</p>
                <p className="label">Email</p>
                <p>Ngoctth@gmail.com</p>
                <p className="label">Phone Number</p>
                <p>+84123 123 123</p>
            </div>
            <button className="edit-button">Edit Profile</button>
        </div>
    </div>
    
    
  );
}

export default CustomerInformation;
