import './admin.css';
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const orderList = [
    { orderID: 1, orderName: "Order #123", customer: "Khanh", driver: "Phu Minh", status: "Pending" },
    { orderID: 2, orderName: "Order #123", customer: "Khanh", driver: "Phu Minh", status: "In Progress" },
    { orderID: 3, orderName: "Order #123", customer: "Khanh", driver: "Phu Minh", status: "Completed" },
    { orderID: 4, orderName: "Order #123", customer: "Khanh", driver: "Phu Minh", status: "Cancelled" },
    { orderID: 5, orderName: "Order #123", customer: "Khanh", driver: "Phu Minh", status: "Unknown Status" }
];

function OrderList() {
    const navigate = useNavigate();

    const viewdetail = () => {
        navigate('/admin/orderdetail');
    }
    
    return (
        <>
            <div className='container'>
                <div className="search-container card">
                    <div className="search-wrapper">
                        <IoMdSearch className='search-icon'/>
                        <input type="text" className="search-input" placeholder="Search order..." />
                    </div>
                </div>
                <div className='status-filters'>
                    <span className="status-filters-badge status-all">All</span>
                    <span className="status-filters-badge status-pending">Pending</span>
                    <span className="status-filters-badge status-inprogress">In Progress</span>
                    <span className="status-filters-badge status-completed">Completed</span>
                    <span className="status-filters-badge status-cancelled">Cancelled</span>
                </div>
                <div className='order-list-container'>
                    {
                        orderList.map((order, index) => (
                            <div className="order-card card" key={order.orderID}>
                                <div className="order-info">
                                    <h2>{order.orderName}</h2>
                                    <div className="customer-number">Customer: {order.customer}</div>
                                    <div className="driver-number">Driver: {order.driver}</div>
                                    <div className="group-button">
                                        <button onClick={viewdetail} className="button">View Detail</button>
                                    </div>
                                </div>
                                {
                                    order.status === 'Pending' ? (
                                        <span className="status-badge status-pending">Pending</span>
                                    ) : order.status === 'In Progress' ? (
                                        <span className="status-badge status-inprogress">In Progress</span>
                                    ) : order.status === 'Completed' ? (
                                        <span className="status-badge status-completed">Completed</span>
                                    ) : (
                                        <span className="status-badge status-cancelled">Cancelled</span>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default OrderList;