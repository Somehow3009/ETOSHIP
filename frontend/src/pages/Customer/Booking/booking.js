
import BookingFrom from './request'
import EstimateButton from './button'
import BookingDetail from './detail'
import { ConfirmButton } from './button'

function BookingInterface(props){
    return (
        <>
            <BookingFrom/>
            <EstimateButton/>
            <BookingDetail/>
            <ConfirmButton/>   
        </>
    );
}


export default BookingInterface;