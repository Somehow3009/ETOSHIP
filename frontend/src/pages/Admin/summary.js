import './admin.css'

function Summary(props){
    return (
        <div className='card'>
            <h2> Summary </h2>
            <div className='summary'>
                <div>
                    <div className='summary-title'>
                        Online Driver
                    </div>
                    <div className='summary-content'>
                        {props.numberOfOnlineDriver}
                    </div>
                </div>
                <div>
                    <div className='summary-title'>
                        Online in Process
                    </div>
                    <div className='summary-content'>
                        {props.numberOfOnlineInProcess}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Summary;