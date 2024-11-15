import './admin.css';
import Header from '../../components/layout/header'
import {PiExportBold} from "react-icons/pi";

function RevenueComparison() {
    
    return (
        <>
            <Header pageName='Revenue Comparison'/>
            <div className='container'>
                <div className="filter">
                    <label htmlFor="driverFilter">Filter Drivers</label>
                    <select id="driverFilter" className="driver-filter">
                        <option>All driver</option>
                        <option>Driver online</option>
                        <option>Driver offline</option>
                    </select>
                </div>
                <div className="filter">
                    <label htmlFor="timeFilter">Filter Days</label>
                    <select id="timeFilter" className="time-filter">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last 90 days</option>
                    </select>
                </div>
                <div className="card revenue-card">
                    <div className="revenue-info">
                        <h2>Driver Earnings Comparison</h2>
                        
                    </div>
                </div>
                <div className="card revenue-card">
                    <div className="revenue-info">
                        <h2>Earnings Summary</h2>

                    </div>
                </div>

                <div class='buttons-finance-report'>
                    <button class='button finance-report-btn'>
                        <PiExportBold />
                        Export Report
                    </button>
                </div>
            </div>
        </>
    );
}

export default RevenueComparison;