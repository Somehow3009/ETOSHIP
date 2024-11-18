import Map from "../../../components/Map/map";

import Search from './search'
import Button from './booking-button'
import TripList from './TripList';

function AdminDashboard(props){
    const trips = [
        { title: 'Home to Titops', date: 'July 22, 2024', price: '45.000' },
        { title: 'Home to Restaurant', date: 'July 22, 2024', price: '55.000' },
        { title: 'Office to Airport', date: 'July 22, 2024', price: '75.000' },
    ];
    return (
        <>
           
            
                <Search />
                <Map mapTitle='Available Vehicle' />
                <Button/>
                <TripList trips={trips} />
           
            
        </>
    );
}


export default AdminDashboard;