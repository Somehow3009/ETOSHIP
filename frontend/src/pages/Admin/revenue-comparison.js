import './admin.css';
import {PiExportBold} from "react-icons/pi";
import BarChart from '../../components/Chart/bar-chart';

function RevenueComparison() {
    
    const chartData = [
        { month: 'Tháng 1', value: 12 },
        { month: 'Tháng 2', value: 19 },
        { month: 'Tháng 3', value: 5 },
        { month: 'Tháng 4', value: 10 },
        { month: 'Tháng 5', value: 2 },
        { month: 'Tháng 6', value: 24 },
    ];

    return (
        <>
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
                        <div className='total-earning-content chart-container'>
                            <BarChart chartData={chartData} />
                        </div>
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