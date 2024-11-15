import './driver.css'

import Map from '../../components/Map/map'
import { FaSquareFull, FaFlagCheckered } from 'react-icons/fa';
import { TbPointFilled } from 'react-icons/tb';
import { GiPathDistance } from 'react-icons/gi';
import { IoMdInformationCircle } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
import { RiMessage2Fill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import jobData from './joblist.json';

function TripTracker(props){
    const { customerId } = useParams();
    const customerInfo = jobData.jobs.find(job => job.customerID === customerId);

    if (!customerInfo) {
        return <div>Customer not found</div>;
    }

    return (
        <>
            <Map />
            <div className='trip-status card'>
                <div className='trip-info'>
                    <div className='trip-title'>
                        <h2>Trip in Progress</h2>
                        <div className='trip-subtitle'>Start at: {customerInfo.pickupTime}</div>
                    </div>
                    <div className='trip-time'>25 min</div>
                </div>
                <div className='btn-container'>
                    <button className='button end-trip-btn'>
                        <FaSquareFull />
                        End Trip
                    </button>
                </div>
            </div>

            <div className='trip-details card'>
                <h2>Route Information</h2>
                
                <div className='trip-detail-item'>
                    <TbPointFilled />
                    <div className='trip-text'>
                        <div className='trip-label'>Current Location</div>
                        <div className='trip-value'>{customerInfo.pickupLocation}</div>
                    </div>
                </div>

                <div className='trip-detail-item'>
                    <FaFlagCheckered />
                    <div className='trip-text'>
                        <div className='trip-label'>Destination Location</div>
                        <div className='trip-value'>{customerInfo.dropoffLocation}</div>
                    </div>
                </div>

                <div className='trip-detail-item'>
                    <GiPathDistance />
                    <div className='trip-text'>
                        <div className='trip-label'>Distance Remaining</div>
                        <div className='trip-value'>3 km</div>
                    </div>
                </div>
            </div>

            <div className='card traffic-alert'>
                <h2>Traffic Alert</h2>
                <div>Heavy traffic. Estimated delay: 10 min</div>
            </div>


            <div className='bottom-nav'>
                <button className='nav-item'>
                    <FaPhone />
                </button>
                <button className='nav-item'>
                    <RiMessage2Fill />
                </button>
                <button className='nav-item'>
                    <IoMdInformationCircle />
                </button>
            </div>
        </>
    );
}

export default TripTracker;