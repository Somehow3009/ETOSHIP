import Map from "../Map/map";
import Summary from "./summary";
import ActiveTask from "./active-task";
import Header from '../layout/header'
import Nav from '../layout/nav'

function AdminDashboard(props){
    return (
        <>
            <Header pageName='Admin Dashboard'/>
            <div className='container'>
                <Map mapTitle='Driver Location' />
                <Summary numberOfOnlineDriver='24' numberOfOnlineInProcess='18' />
                <ActiveTask />
            </div>
            <Nav />
        </>
    );
}

export default AdminDashboard;