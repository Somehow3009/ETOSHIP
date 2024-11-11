import Header from '../layout/header'
import Nav from '../layout/nav'
import BookingFrom from './request'
import EstimateButton from './estimate-button'

function BookingInterface(props){
    return (
        <>
            <Header pageName='Booking Interface'/>
           
           <div className='container'>
            <BookingFrom/>
            <EstimateButton/>
           </div>
            
            <Nav />
        </>
    );
}


export default BookingInterface;