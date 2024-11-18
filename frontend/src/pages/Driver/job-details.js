import './driver.css';
import Map from '../../components/Map/map';

import { FaPhone, FaMoneyBills  } from 'react-icons/fa6';
import { RiMessage2Fill } from 'react-icons/ri';
import { TbPointFilled } from 'react-icons/tb';
import { FaFlagCheckered } from 'react-icons/fa';
import { MdAccessTimeFilled } from 'react-icons/md';
import { useParams } from 'react-router-dom';

import jobData from './joblist.json';

function JobDetails(){
    const { customerId } = useParams();
    const customerInfo = jobData.jobs.find(job => job.customerID === customerId);

    if (!customerInfo) {
        return <div>Customer not found</div>;
    }

    return (
        <>
            <div className='container'>
                <Map/>

                <div className='card'>
                    <div className='customer-info'>
                        <img src='https://picsum.photos/100/100?random=2' alt='Customer Avatar' className='customer-avatar' />
                        <div className='customer-details'>
                            <div className='customer-name'>{customerInfo.customerName}</div>
                            <div className='customer-id'>Customer ID: {customerInfo.customerID}</div>
                        </div>
                    </div>

                    <div className='action-buttons'>
                        <button className='button btn-call'>
                            <FaPhone />
                            Call Customer
                        </button>
                        <button className='button btn-message'>
                            <RiMessage2Fill />
                            Message
                        </button>
                    </div>
                </div>
                <div className='trip-details card'>
                    <h2>Trip Detail</h2>
                    
                    <div className='trip-detail-item'>
                        <TbPointFilled />
                        <div className='trip-text'>
                            <div className='trip-label'>Pick up Location</div>
                            <div className='trip-value'>{customerInfo.pickupLocation}</div>
                        </div>
                    </div>

                    <div className='trip-detail-item'>
                        <FaFlagCheckered />
                        <div className='trip-text'>
                            <div className='trip-label'>Dropoff Location</div>
                            <div className='trip-value'>{customerInfo.dropoffLocation}</div>
                        </div>
                    </div>

                    <div className='trip-detail-item'>
                        <MdAccessTimeFilled />
                        <div className='trip-text'>
                            <div className='trip-label'>Estimated Time of Arrival</div>
                            <div className='trip-value'>{customerInfo.estimatedTimeOfArrival}</div>
                        </div>
                    </div>

                    <div className='trip-detail-item'>
                        <FaMoneyBills />
                        <div className='trip-text'>
                            <div className='trip-label'>Estimated Fare</div>
                            <div className='trip-value'>{customerInfo.estimatedFare}</div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className='bottom-nav'>
                <button className='button start-trip-btn'>Start Trip</button>
            </nav>

        </>
    );
}

export default JobDetails;