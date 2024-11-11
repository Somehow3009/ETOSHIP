import './driver.css';

function JobCard(props){
    const { customerName, pickupLocation, pickupTime, accept } = props.info

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
                        <button className='button btn-start'>Start Trip</button>
                        <button className='btn-view button'>View Details</button>
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