import './admin.css'

function ActiveTask(props){
    return (
        <div className='card'>
            <h2> Active Tasks </h2>
            <div className='active-task'>
                <div className='active-task-content'>
                    <div className='active-task-destination'> {props.destinationOfTrip}</div>
                    <div className='active-task-price'> {props.dateOfTrip}</div>
                </div>
                <div className='active-task-price'>
                    {props.priceOfTrip}
                </div>

                <div className='active-task-content'>
                    <div className='active-task-destination'> {props.destinationOfTrip}</div>
                    <div className='active-task-price'> {props.dateOfTrip}</div>
                </div>
                <div className='active-task-price'>
                    {props.priceOfTrip}
                </div>

                <div className='active-task-content'>
                    <div className='active-task-destination'> {props.destinationOfTrip}</div>
                    <div className='active-task-price'> {props.dateOfTrip}</div>
                </div>
                <div className='active-task-price'>
                    {props.priceOfTrip}
                </div>
            </div>
        </div>
    );
}

export default ActiveTask;