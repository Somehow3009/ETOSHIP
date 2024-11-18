import Map from "../../components/Map/map";
import Summary from "./summary";
import ActiveTask from "./active-task";

import { useNavigate } from 'react-router-dom'

function AdminDashboard(props){
    const navigate = useNavigate();

    const viewdriver = () => {
        navigate('/admin/driverlist');
    }
    
    const viewstatistics = () => {
        navigate('/admin/financereport');
    }
    return (
        <>
            <div className='container'>
                <Map mapTitle='Driver Location' />
                <Summary numberOfOnlineDriver='24' numberOfOnlineInProcess='18' />
                <ActiveTask destinationOfTrip='Home to Titops' dateOfTrip='July 22, 2024' priceOfTrip='$ 45.000'/> 
            
            </div>
        </>
    );
}

export default AdminDashboard;