import './driver.css';
import Header from '../layout/header';
import Nav from '../layout/nav';
import InforCard from './info-card';
import Map from '../Map/map';

function DriverDashboard(props){

    const cur_job_info = {
        pickup: '123 Hoa Binh St',
        dropoff: '456 30/4 St',
        distance: 5.2,
        ETA: 10
    };

    return (
        <>
            <Header pageName='Driver Dashboard' img='./img/driver-img.png' />
            <div className='container'>
                <InforCard cardTitle='Current Job' info={cur_job_info} buttonTitle='Start Trip' />
                <Map mapTitle='Map Route'/>
                <InforCard cardTitle='Next Available Task' info={cur_job_info} buttonTitle='View Detail' />
            </div>
            <Nav active='home'/>
        </>
    );
}

export default DriverDashboard;

