import './driver.css';
import { useNavigate } from 'react-router-dom'

function JobCard(props){
    const { customerID, customerName, pickupLocation, pickupTime, accept } = props.info

    const navigate = useNavigate();
    
    const startTrip = () => {
        navigate(`/driver/trip-tracker/${customerID}`);
    }

    const jobDetail = () => {
        navigate(`/driver/job-detail/${customerID}`);
    }

    return (
        <div className='job-card'>
            <div className='job-info'>
                <div className='customer-name name'> {customerName} </div>
                <div className='address'> {pickupLocation} </div>
                <div className='time'> {pickupTime} </div>
            </div>
            {
                accept === 'true' ? (
                    <div className='button-group'>
                        <button onClick={startTrip} className='button btn-start'>Start Trip</button>
                        <button onClick={jobDetail} className='btn-view button'>View Details</button>
                    </div>
                ) : (
                    <div className='button-group'>
                        <button className='button btn-accept'>Accept</button>
                        <button className='button btn-reject'>Reject</button>
                    </div>
                )
            }
        </div>
    );
}

export default JobCard;