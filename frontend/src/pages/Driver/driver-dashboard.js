import CurJobCard from '../../components/Card/cur-job-card';
import Map from '../../components/Map/map';

function DriverDashboard(props){

    const cur_job_info = {
        pickup: '123 Hoa Binh St',
        dropoff: '456 30/4 St',
        distance: 5.2,
        ETA: 10
    };

    return (
        <>
            <CurJobCard cardTitle='Current Job' info={cur_job_info} buttonTitle='Start Trip' />
            <Map mapTitle='Map Route'/>
            <CurJobCard cardTitle='Next Available Task' info={cur_job_info} buttonTitle='View Detail' />
        </>
    );
}

export default DriverDashboard;

