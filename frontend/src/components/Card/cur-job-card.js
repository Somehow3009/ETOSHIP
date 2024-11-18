function CurJobCard(props){
    const { pickup, dropoff, distance, ETA } = props.info;

    return (
        <div className='card'>
            <h2>{ props.cardTitle }</h2>
            <div className='cur-job-content'>
                <div className='cur-job-info'>Pickup: { pickup }</div>
                <div className='cur-job-info'>Dropoff: { dropoff }</div>
                <div className='cur-job-info'>Distance: { distance } km</div>
                <div className='cur-job-info'>ETA: { ETA } m</div>
            </div>
            <button className='cur-job-btn button'>{ props.buttonTitle }</button>
        </div>
    );
}
    
export default CurJobCard;