function JobCard(props){

    const { custormer, address, time, accept } = props.info

    return (
        <div className="job-card">
            <div className="job-info">
                <div className="customer-name name"> {custormer} </div>
                <div className="address"> {address} </div>
                <div className="time"> {time} </div>
            </div>
            {
                accept ? (
                    <div className="button-group">
                        <button className="btn btn-start">Start Trip</button>
                        <button className="btn btn-view">View Details</button>
                    </div>
                ) : (
                    <div className="button-group">
                        <button className="btn btn-accept">Accept</button>
                        <button className="btn btn-reject">Reject</button>
                    </div>
                )
            }
        </div>
    );
}

export default JobCard;