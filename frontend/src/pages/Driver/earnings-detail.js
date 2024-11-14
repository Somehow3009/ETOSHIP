import BarChart from '../../components/Chart/bar-chart';
import { FaCalendarAlt, FaCar, FaGift, FaChevronRight, FaFileExport  } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { FaCoins } from 'react-icons/fa6';
import { MdPayments } from 'react-icons/md';

function EarningsDetails(props) {

    const chartData = [
        { month: 'Tháng 1', value: 12 },
        { month: 'Tháng 2', value: 19 },
        { month: 'Tháng 3', value: 5 },
        { month: 'Tháng 4', value: 10 },
        { month: 'Tháng 5', value: 2 },
    ];

    return (
        <>
            <div className='filter-section card'>
                <FaCalendarAlt />
                <span>Filter by Date</span>
                <IoIosArrowDown className='arrow-down' />
            </div>

            <div className='earning-container'>
                <h2>Total Earnings</h2>
                <div className='total-earning-content'>
                    <div className='total-earning'>$ 1.234.567</div>
                    <div className='last-updated'>Last updated: 5:55 Oct 22, 2024</div>
                </div>
            </div>

            <div className='earning-container'>
                <h2>Earnings Breakdown</h2>
                
                <div className='breakdown-item card'>
                    <div className='breakdown-left'>
                        <div className='breakdown-icon'>
                            <FaCar />
                        </div>
                        <div>
                            <div>Completed Trips</div>
                            <div className='breakdown-amount'>$1,246,357</div>
                        </div>
                    </div>
                    <FaChevronRight />
                </div>

                <div className='breakdown-item card'>
                    <div className='breakdown-left'>
                        <div className='breakdown-icon'>
                            <FaCoins />
                        </div>
                        <div>
                            <div>Tips</div>
                            <div className='breakdown-amount'>$246,357</div>
                        </div>
                    </div>
                    <FaChevronRight />
                </div>

                <div className='breakdown-item card'>
                    <div className='breakdown-left'>
                        <div className='breakdown-icon'>
                            <FaGift />
                        </div>
                        <div>
                            <div>Bonus</div>
                            <div className='breakdown-amount'>$357,246</div>
                        </div>
                    </div>
                    <FaChevronRight />
                </div>
            </div>

            <div className='earning-container'>
                <h2>Earnings Trend</h2>
                <div className='total-earning-content chart-container'>
                    <BarChart chartData={chartData} />
                </div>
            </div>

            <div class='action-buttons-earnings'>
                <button class='button request-payment-btn'>
                    <MdPayments />
                    Request Payment
                </button>
                <button class='button export-report-btn'>
                    <FaFileExport />
                    Export Report
                </button>
            </div>
        </>
    );
}

export default EarningsDetails;