function CurJobCard(props){
    const { pickup, dropoff, distance, ETA } = props.info;

    return (
        <div className="card">
            <h2>{ props.cardTitle }</h2>
            <div className="job-details">
                <div className="info">Pickup: { pickup }</div>
                <div className="info">Distance: { distance } km</div>
                <div className="info">Dropoff: { dropoff }</div>
                <div className="info">ETA: { ETA } m</div>
            </div>
            <button className="button">{ props.buttonTitle }</button>
        </div>
    );
}
    
export default CurJobCard;