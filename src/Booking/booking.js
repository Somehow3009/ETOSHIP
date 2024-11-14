import Header from '../layout/header'
import Nav from '../layout/nav'
import BookingFrom from './request'
import EstimateButton from './button'
import BookingDetail from './detail'
import { ConfirmButton } from './button'

function BookingInterface(props){
    return (
        <>
            <Header pageName='Booking Interface'/>
           
           <div className='container'>
            <BookingFrom/>
            <EstimateButton/>
            <BookingDetail/>
            <ConfirmButton/>
           </div>
            
            <Nav />
        </>
    );
}


export default BookingInterface;