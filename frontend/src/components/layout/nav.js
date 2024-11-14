import './nav.css'
import { FaHome, FaUser, FaRegChartBar, FaListUl } from 'react-icons/fa'
import { useNavigate, useLocation } from 'react-router-dom'

function Navigate(props){
    const navigate = useNavigate();
    const location = useLocation();

    const goToJobList = () => {
        navigate('/driver/job-list');
    }

    const goToHome = () => {
        navigate('/driver');
    }

    const goToChart = () => {
        navigate('/driver/chart');
    }

    const goProfile = () => {
        navigate('/driver/profile');
    }

    const currentPath = location.pathname;

    return (
        <nav className="bottom-nav">
            <a onClick={goToHome} className={`nav-item ${currentPath === '/driver' && 'active'}`}>
                <FaHome className='icon'/>
            </a>
            <a onClick={goToJobList} className={`nav-item ${currentPath === '/driver/job-list' && 'active'}`}>
                <FaListUl className='icon'/>
            </a>
            <a onClick={goToChart} className={`nav-item ${currentPath === '/driver/chart' && 'active'}`}>
                <FaRegChartBar className='icon'/>
            </a>
            <a onClick={goProfile} className={`nav-item ${currentPath === '/driver/profile' && 'active'}`}>
                <FaUser className='icon'/>
            </a>
        </nav>
    );
}

export default Navigate;