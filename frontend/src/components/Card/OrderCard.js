import { IoIosArrowRoundForward } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';

function OrderCard(props) {
    const order = props.order;
    const location = useLocation();
    const navigate = useNavigate();
    
    const handleStartTrip = () => {
        navigate(`/driver/trip-tracker/${order.orderId}`);
    }

    const handleViewDetail = () => {
        navigate(`/driver/order-details/${order.orderId}`);
    }

    return (
        <div className="driver-order-card card">
            <div className="order-info">
                <div className="title">{order.customerName}</div>
                <div className="time">{order.time}</div>
                <div className="content">{order.orderContent}</div>
            </div>
            {location.pathname === '/driver' ? (
                <button onClick={handleViewDetail} className='arrow-btn button'>
                    <IoIosArrowRoundForward /> 
                </button>
            ) : (
                order.accept === true ? (
                    <div className='button-group'>
                        <button onClick={handleViewDetail} className='btn-view button'>Detail</button>
                        <button onClick={handleStartTrip} className='button btn-start'>Start Trip</button>
                    </div>
                ) : (
                    <div className='button-group'>
                        <button className='button btn-reject'>Reject</button>
                        <button className='button btn-accept'>Accept</button>
                    </div>
                )
            )}
        </div>
    );
}

export default OrderCard;