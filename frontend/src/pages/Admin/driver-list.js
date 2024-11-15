import { IoMdSearch } from "react-icons/io";
import './admin.css'
import { useNavigate } from 'react-router-dom'
    
const addNewDriver = () => {

}

const driverList = [
    { driverID: 1, driverName: "Dinh Phu Minh", totalTrips: "123", income: "1.234.567", status: "Online" },
    { driverID: 2, driverName: "Dinh Phu Minh", totalTrips: "234", income: "1.234.567", status: "Offline" },
    { driverID: 3, driverName: "Dinh Phu Minh", totalTrips: "456", income: "1.234.567", status: "Online" }
];

function DriverList(){
    const navigate = useNavigate();

    const driverprofile = () => {
        navigate('/admin/driverprofile');
    }
    
    return (
        <>
            <div className='container'>
                <div className="search-container card">
                        <div className="search-wrapper">
                            <IoMdSearch className='search-icon'/>
                            <input type="text" className="search-input" placeholder="Search Vehicle..." />
                        </div>
                </div>
                <div className='status-filters'>
                    <span className="status-filters-badge status-all">All</span>
                    <span className="status-filters-badge status-online">Online</span>
                    <span className="status-filters-badge status-offline">Offline</span>
                </div>
                <div className='driver-list-container'>
                    {
                        driverList.map((driver, index) => (
                            <div className="driver-card card" key={driver.driverID}>
                                <div className="driver-info">
                                    <h2>{driver.driverName}</h2>
                                    <div className="total-trips">Customer: {driver.totalTrips}</div>
                                    <div className="income">Driver: {driver.income}</div>
                                    <button onClick={driverprofile} className="button">Driver Profile</button>
                                </div>
                                {
                                    driver.status === 'Online' ? (
                                        <span className="status-badge status-online">Online</span>
                                    ) :  (
                                        <span className="status-badge status-offline">Offline</span>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default DriverList;

