import './map.css'

function Map(props){
    return (
        <div className='map-container'>
            {props.name !== undefined && (
                <div className='title'>
                    {props.name}
                </div>
            )}
            <div className='container map'>
                <div>
                    map
                </div>
            </div>
        </div>
    )
}

export default Map;