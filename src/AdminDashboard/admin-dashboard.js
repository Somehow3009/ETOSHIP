import Map from "./map";
import Summary from "./summary";
import ActiveTask from "./active-task";

function AdminDashboard(){
    return (
        <div className='primary-container'>
            <Map name='Driver Location' />
            <Summary numberOfOnlineDriver='24' numberOfOnlineInProcess='18' />
            <ActiveTask />
        </div>
    );
}

export default AdminDashboard;