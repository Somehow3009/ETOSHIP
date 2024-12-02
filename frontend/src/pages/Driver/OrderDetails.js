import { useParams } from 'react-router-dom';
import orderData from './order-data.json';
import avt from '../../assets/img/tmp_avt.jpg';
import InfoCard from '../../components/Card/InfoCard';
import { FaLocationDot, FaClock  } from "react-icons/fa6";

function OrderDetails(){

    const { orderId } = useParams();
    const order = orderData.orders.find(order => order.orderId === orderId);   

    return(
        <>
            <div className='customer-info'>
                <img src={avt} alt='Avatar' className='avatar' />
                <div className='customer-name'>{order.customerName}</div>
            </div>
            <InfoCard title='Content' content={order.orderContent} />
            <InfoCard title='Delivery Time' icon={FaClock} content={order.time} />
            <InfoCard title='Address' icon={FaLocationDot} content={order.address} />
            <InfoCard title='Note' content={order.note} />
        </>
    );
}

export default OrderDetails;