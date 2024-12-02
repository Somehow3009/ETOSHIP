import Map from '../../components/Map/map';
import OrderCard from '../../components/Card/OrderCard';
import orderData from './order-data.json';

function DriverDashboard(props){

    const orderList = orderData.orders;
    const curOrder = orderList.find(order => order.accept === true);

    return (
        <>    
            <Map mapHeight='500px' />
            <div className='info-section'>
                <h2>Current order</h2>
                <OrderCard order={curOrder} />
            </div>
        </>
    );
}

export default DriverDashboard;

