import { MdPrivacyTip } from 'react-icons/md';
import { FaBell } from 'react-icons/fa';

const DriverProfile = () => {

    const driverProfile = {
        id: '817345',
        name: 'Dinh Phu Minh',
        email: 'Minhdp@gmail.com',
        phoneNumber: '+84123 123 123',
        dateOfBirth: 'October 31, 1999',
        vehicle: {
          name: 'Super Cub',
          licensePlate: '52 - HI 7728',
          year: 1999,
          color: 'Green'
        }
    };  

    return (    
        <>
            <div className='profile-section'>
                <div className='profile-image'>
                    <img src='https://picsum.photos/100/100?random=2' alt='Customer Avatar' />
                </div>
                <div className='driver-name'>{driverProfile.name}</div>
                <div className='driver-id'>Driver ID: {driverProfile.id}</div>
            </div>

            <div className='action-buttons'>
                <button className='button edit-btn'>Edit Profile</button>
                <button className='button change-btn'>Change Vehicle</button>
            </div>

            <div className='info-section'>
                <h2>Personal Information</h2>
                <div className='info-item card'>
                    <div className='info-label'>Full Name</div>
                    <div className='info-value'>{driverProfile.name}</div>
                </div>
                <div className='info-item card'>
                    <div className='info-label'>Email</div>
                    <div className='info-value'>{driverProfile.email}</div>
                </div>
                <div className='info-item card'>
                    <div className='info-label'>Phone Number</div>
                    <div className='info-value'>{driverProfile.phoneNumber}</div>
                </div>
                <div className='info-item card'>
                    <div className='info-label'>Date of Birth</div>
                    <div className='info-value'>{driverProfile.dateOfBirth}</div>
                </div>
            </div>

            <div className='info-section'>
                <h2>Vehicle Information</h2>
                <div className='info-item card'>
                    <div className='info-label'>Vehicle Name</div>
                    <div className='info-value'>{driverProfile.vehicle.name}</div>
                </div>
                <div className='info-item card'>
                    <div className='info-label'>License Plate</div>
                    <div className='info-value'>{driverProfile.vehicle.licensePlate}</div>
                </div>
                <div className='info-item card'>
                    <div className='info-label'>Year</div>
                    <div className='info-value'>{driverProfile.vehicle.year}</div>
                </div>
                <div className='info-item card'>
                    <div className='info-label'>Color</div>
                    <div className='info-value'>{driverProfile.vehicle.color}</div>
                </div>
            </div>


            <button className='settings-button card'>    
                <div className='settings-icon'>
                    <MdPrivacyTip />    
                </div>
                <div>Privacy Settings</div>
            </button>

            <button className='settings-button card'>
                <div className='settings-icon'>
                    <FaBell />
                </div>
                <div>Notification Preferences</div>
            </button>

        </>
    );
}

export default DriverProfile;