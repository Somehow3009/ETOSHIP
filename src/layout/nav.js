import './nav.css'
import { FaHome, FaUser, FaRegChartBar, FaListUl } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Navigate(props){
    const navigate = useNavigate();

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

    return (
        <nav className="bottom-nav">
            <a onClick={goToHome} className={`nav-item ${ props.active === 'home' && 'active'}`}>
                <FaHome className='icon'/>
            </a>
            <a onClick={goToJobList} className={`nav-item ${ props.active === 'list' && 'active'}`}>
                <FaListUl className='icon'/>
            </a>
            <a onClick={goToChart} className={`nav-item ${ props.active === 'chart' && 'active'}`}>
                <FaRegChartBar className='icon'/>
            </a>
            <a onClick={goProfile} className={`nav-item ${ props.active === 'profile' && 'active'}`}>
                <FaUser className='icon'/>
            </a>
        </nav>
    );
}

export default Navigate;