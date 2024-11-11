import './header-detail.css';
import { FaArrowLeft } from "react-icons/fa6";

function HeaderDetail(props){
    return (
        <div className="header-detail">
            <div className="header-detail-content">
                <button className="back-btn">
                    <FaArrowLeft />
                </button>
                <span className="header-title">{props.title}</span>
            </div>
        </div>
    );
}

export default HeaderDetail;