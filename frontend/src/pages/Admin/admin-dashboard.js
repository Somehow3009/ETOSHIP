import Header from '../../components/layout/header'
import Nav from '../../components/layout/nav'
import Map from "../../components/Map/map";
import Summary from "./summary";
import ActiveTask from "./active-task";

import { FaPeopleGroup } from "react-icons/fa6";
import { FcStatistics } from "react-icons/fc";
import { FaHome, FaListUl, FaRegChartBar, FaUser } from 'react-icons/fa';


const pageItems = [
    {
        pageName: 'Driver Dashboard',
        icon: FaHome, 
        path: '/driver'
    },
    {
        pageName: 'Job List',
        icon: FaListUl, 
        path: '/driver/job-list'
    },
    {
        pageName: 'Earnings Details',
        icon: FaRegChartBar, 
        path: '/driver/earnings-details'
    },
    {
        pageName: 'Driver Profiles',
        icon: FaUser, 
        path: '/driver/profile'
    },
]


function AdminDashboard(props){
    return (
        <>
            <Header pageName='Admin Dashboard'/>
            <div className='container'>
                <Map mapTitle='Driver Location' />
                <Summary numberOfOnlineDriver='24' numberOfOnlineInProcess='18' />
                <ActiveTask destinationOfTrip='Home to Titops' dateOfTrip='July 22, 2024' priceOfTrip='$ 45.000'/> 
                <button class="button btn-view">
                    <FaPeopleGroup />
                    View Driver Details
                </button>

                <button class="button btn-view">
                    <FcStatistics />
                    View Statistics
                </button>
            </div>
            <Nav items={pageItems}/>
        </>
    );
}

export default AdminDashboard;