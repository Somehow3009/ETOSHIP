import './admin.css';
import Header from '../../components/layout/header'
import { IoMdSearch } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

const addNewVehicle = () => {

}

const vehicleList = [
    { vehicleID: 1, vehicleName: "Super Cub", licenseNumber: "52H1 7728", status: "Active" },
    { vehicleID: 2, vehicleName: "Super Cub", licenseNumber: "52H1 7728", status: "Inactive" },
    { vehicleID: 3, vehicleName: "Super Cub", licenseNumber: "52H1 7728", status: "Active" },
    { vehicleID: 4, vehicleName: "Super Cub", licenseNumber: "52H1 7728", status: "Inactive" },
    { vehicleID: 5, vehicleName: "Super Cub", licenseNumber: "52H1 7728", status: "Active" },
    { vehicleID: 6, vehicleName: "Super Cub", licenseNumber: "52H1 7728", status: "Inactive" },
    { vehicleID: 7, vehicleName: "Super Cub", licenseNumber: "52H1 7728", status: "Active" },
    { vehicleID: 8, vehicleName: "Super Cub", licenseNumber: "52H1 7729", status: "Inactive" },
];


const VehicleList = () => {
    return (
        <>
            <Header pageName='Vehicle List' addNew={addNewVehicle} addNewTitle='Add New Vehicle'/>
            <div className='container'>
                <div className="search-container card">
                    <div className="search-wrapper">
                        <IoMdSearch className='search-icon'/>
                        <input type="text" className="search-input" placeholder="Search Vehicle..." />
                    </div>
                </div>

                <div className='vehicle-list-container'>
                    {
                        vehicleList.map((vehicle, index) => (
                            <div className="vehicle-card card" key={vehicle.vehicleID}>
                                <div className="vehicle-info">
                                    <h2>{vehicle.vehicleName}</h2>
                                    <div className="license-number">License Number: {vehicle.licenseNumber}</div>
                                    <a href="#" className="edit-btn">
                                        <FaEdit />
                                        Edit
                                    </a>
                                </div>
                                {
                                    vehicle.status === 'Inactive' ? (
                                        <span className="status-badge status-inactive">Inactive</span>
                                    ) : (
                                        <span className="status-badge status-active">Active</span>
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

export default VehicleList;