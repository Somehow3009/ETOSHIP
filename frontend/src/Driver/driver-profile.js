import './driver.css';
import HeaderDetail from '../layout/header-detail';
import Nav from '../layout/nav'

import { MdPrivacyTip } from "react-icons/md";
import { FaBell } from "react-icons/fa";

const DriverProfile = () => {

    const driverProfile = {
        name: "Dinh Phu Minh",
        email: "Minhdp@gmail.com",
        phoneNumber: "+84123 123 123",
        dateOfBirth: "October 31, 1999",
        vehicle: {
          name: "Super Cub",
          licensePlate: "52 - HI 7728",
          year: 1999,
          color: "Green"
        }
    };  

    return (    
        <>
            <HeaderDetail title='Driver Profile' />
            <div className='container'>
                <div className="profile-section">
                    <div className="profile-image">
                        <img src='https://picsum.photos/100/100?random=2' alt='Customer Avatar' />
                    </div>
                    <div className="driver-name">Phu Minh</div>
                    <div className="driver-id">Driver ID: 817345</div>
                </div>

                <div className="action-buttons">
                    <button className="button edit-btn">Edit Profile</button>
                    <button className="button change-btn">Change Vehicle</button>
                </div>

                <div className="info-section">
                    <h2>Personal Information</h2>
                    <div className="info-item card">
                        <div className="info-label">Full Name</div>
                        <div className="info-value">Dinh Phu Minh</div>
                    </div>
                    <div className="info-item card">
                        <div className="info-label">Email</div>
                        <div className="info-value">Minhdp@gmail.com</div>
                    </div>
                    <div className="info-item card">
                        <div className="info-label">Phone Number</div>
                        <div className="info-value">+84123 123 123</div>
                    </div>
                    <div className="info-item card">
                        <div className="info-label">Date of Birth</div>
                        <div className="info-value">October 31, 1999</div>
                    </div>
                </div>

                <div className="info-section">
                    <h2>Vehicle Information</h2>
                    <div className="info-item card">
                        <div className="info-label">Vehicle Name</div>
                        <div className="info-value">Super Cub</div>
                    </div>
                    <div className="info-item card">
                        <div className="info-label">License Plate</div>
                        <div className="info-value">52 - H1 7728</div>
                    </div>
                    <div className="info-item card">
                        <div className="info-label">Year</div>
                        <div className="info-value">1999</div>
                    </div>
                    <div className="info-item card">
                        <div className="info-label">Color</div>
                        <div className="info-value">Green</div>
                    </div>
                </div>


                <button className="settings-button card">    
                    <div className="settings-icon">
                        <MdPrivacyTip />    
                    </div>
                    <div>Privacy Settings</div>
                </button>

                <button className="settings-button card">
                    <div className="settings-icon">
                        <FaBell />
                    </div>
                    <div>Notification Preferences</div>
                </button>


            </div>
            <Nav active='profile' />
        </>
    );
}

export default DriverProfile;