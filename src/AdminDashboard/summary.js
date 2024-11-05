import './summary.css'

function Summary(props){
    return (
        <div className='summary-container'>
            <div className='title'>
                Summary
            </div>
            <div className='summary'>
                <div className='container'>
                    <div className='summary-title'>
                        Online Driver
                    </div>
                    <div className='summary-content'>
                        {props.numberOfOnlineDriver}
                    </div>
                </div>
                <div className='container'>
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