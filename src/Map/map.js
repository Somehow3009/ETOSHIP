import './map.css'

function Map(props){
    return (
        <div className="card">
            <h2> { props.mapTitle } </h2>
            <div className="map-container">
                Map
            </div>
        </div>
    );

}

export default Map;