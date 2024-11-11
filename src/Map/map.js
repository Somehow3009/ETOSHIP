import './map.css'

function Map(props){
    return (
        <div className="card">
            {props.mapTitle && <h2> { props.mapTitle } </h2>}
            <div className="map-container">
            <iframe title='Map Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1052772060525!2d105.7776696!3d10.008162200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089374f154bcf%3A0xddfdadfad94dd0d4!2sTitops!5e0!3m2!1svi!2s!4v1731056211290!5m2!1svi!2s" width = '100%' height = '100%'></iframe>
            </div>
        </div>
    );
}

export default Map;