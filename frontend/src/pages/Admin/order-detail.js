import './admin.css';
import { GrMapLocation } from "react-icons/gr";
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";

function OrderDetail() {
    return (
        <>
            <div className='container'>
                <div className="order-info">
                    <h2>Order #123</h2>
                    <span className="status-badge status-pending detail">Pending</span>
                    <div className="info">July, 21 2024 at 2:33 PM</div>
                </div>
               
                <div className="order-info">
                    <h2>Customer Information</h2>
                    <div className="info">Khang</div>
                    <div className="info">khang@gmail.com</div>
                    <div className="info">0123 456 789</div>
                </div>

                <div className="order-info">
                    <h2>Driver Information</h2>
                    <div className="info">Phu Minh</div>
                    <div className="info">minh@gmail.com</div>
                    <div className="info">0987 654 321</div>
                </div>
                
                <div className="order-info">
                    <h2>Trip Detail</h2>
                    <div className="info">
                        <div><span className="edit-icon"><GrMapLocation /></span> Pick up Location</div>
                        <div className='info-detail'>123 Titops Tower</div>
                    </div>
                    <div className="info">
                        <div><span className="edit-icon"><FaLocationArrow /></span> Dropoff Location</div>
                        <div className='info-detail'>123 Titops Tower</div>
                    </div>
                    <div className="info">
                        <div><span className="edit-icon"><IoIosTimer /></span>Estimated Time of Arrival</div>
                        <div className='info-detail'>123 Titops Tower</div>
                    </div>
                </div>

                <div className="order-info">
                    <div>
                        <h2>Total <span className='total'>$33.000</span></h2>
                    </div>
                    
                    <div class='buttons-order-detatil'>
                        <button class='button update-state-1-btn'>
                            Update Status
                        </button>
                        <button class='button update-state-2-btn'>
                            Cancelled
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDetail;