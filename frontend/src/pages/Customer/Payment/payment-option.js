
import PaymentMethod from "./payment-method";
import AddPaymentMethodButton from "./button";
import { ProceedButton } from './button'
import PaymentDetail from "./payment-detail";

function PaymentOptions(props){
    return (
        <>
           
            <div>
                <h2>Select Payment Method</h2>
            </div>
            
                <PaymentMethod/>
                <AddPaymentMethodButton/>
                <PaymentDetail/>
                <ProceedButton/>
           
           
           
            
           
        </>
    );
}


export default PaymentOptions;