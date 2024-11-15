import './admin.css';
import Header from '../../components/layout/header'
import { PiExportBold } from "react-icons/pi";

function FinaceReport() {
    return (
        <>
            <Header pageName='Finace Report'/>
            <div className='container'>
                <div className="filter">
                    <label htmlFor="timeFilter">Filter</label>
                    <select id="timeFilter" className="time-filter">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last 90 days</option>
                    </select>
                </div>
                <div className="card revenue-card">
                    <div className="revenue-info">
                        <h2>Total Revenue</h2>
                        <h1 className="revenue-amount">$ 89.542.123</h1>
                    </div>
                </div>
                <div className="card revenue-card">
                    <div className="revenue-info">
                        <h2>Driver Income</h2>
                        <h1 className="revenue-amount">$ 34.150.313</h1>
                    </div>
                </div>
                <div className="card revenue-card">
                    <div className="revenue-info">
                        <h2>Expenses</h2>
                        <h1 className="revenue-amount">$ 15.352.179</h1>
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

export default FinaceReport;