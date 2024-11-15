import './header-detail.css';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


function HeaderDetail(props){
    const navigate = useNavigate()

    const goToJobList = () => {
        navigate(props.link);
    }

    return (
        <div className={`header-detail ${props.color === 'red' && 'header-detail-red'}`}>
            <div className="header-detail-content">
                <button onClick={goToJobList} className={`back-btn ${props.color === 'red' && 'back-btn-red'}`}>
                    <FaArrowLeft />
                </button>
                <span className="header-title">{props.title}</span>
            </div>
        </div>
    );
}

export default HeaderDetail;