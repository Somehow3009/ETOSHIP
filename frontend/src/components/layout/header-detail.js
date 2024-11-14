import './header-detail.css';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


function HeaderDetail(props){
    const navigate = useNavigate()

    const goToJobList = () => {
        navigate('/driver/job-list');
    }

    return (
        <div className="header-detail">
            <div className="header-detail-content">
                <button onClick={goToJobList} className="back-btn">
                    <FaArrowLeft />
                </button>
                <span className="header-title">{props.title}</span>
            </div>
        </div>
    );
}

export default HeaderDetail;