import Map from "../Map/map";
import Summary from "./summary";
import ActiveTask from "./active-task";
import Header from '../layout/header'
import Nav from '../layout/nav'

function AdminDashboard(){
    return (
        <div>
            <Header pageName='Admin Dashboard'/>
            <div className='primary-container'>
                <Map mapTitle='Driver Location' />
                <Summary numberOfOnlineDriver='24' numberOfOnlineInProcess='18' />
                <ActiveTask />
            </div>
            <Nav />
        </div>
    );
}

export default AdminDashboard;