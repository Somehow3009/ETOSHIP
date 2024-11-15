import Header from "../layout/header";
import Nav from '../layout/nav';
import CustomerInformation from "./customer-information";
import './profile.css'
import TripList from "./TripList";
import PaymentMethodCard from "./payment-method";

function CustomerProfile(props){
    const trips = [
        { title: 'Home to Titops', date: 'July 22, 2024', price: '45.000' },
        { title: 'Home to Restaurant', date: 'July 22, 2024', price: '55.000' },
        { title: 'Office to Airport', date: 'July 22, 2024', price: '75.000' },
    ];
    return (
        <>
            <Header pageName='Customer Profile'/>
           
           <div className='container'>
                
                <CustomerInformation/>
                <TripList trips={trips} />
                <PaymentMethodCard/>
           </div>
            
            <Nav/>
            
        </>
    );
}


export default CustomerProfile;