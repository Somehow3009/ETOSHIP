import OrderCard from '../../components/Card/OrderCard';
import orderData from './order-data.json';

function OrderList(props){    
    const orderList = orderData.orders;
  
    return (
        <>
            <div className='driver-order-list'>
                {
                    orderList.map((order) => (
                        <OrderCard
                            key={order.orderId}
                            order={order} 
                        />
                    ))
                }
            </div>
        </>
    );
}

export default OrderList;