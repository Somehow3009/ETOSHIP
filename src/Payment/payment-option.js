import Header from "../layout/header";
import Nav from '../layout/nav';
import PaymentMethod from "./payment-method";
import AddPaymentMethodButton from "./button";
import { ProceedButton } from './button'

function PaymentOptions(props){
    return (
        <>
            <Header pageName='Payment Options'/>
            <div>
                <h2>Select Payment Method</h2>
            </div>
            <div className="container">
                <PaymentMethod/>
                <AddPaymentMethodButton/>

                <ProceedButton/>
            </div>
           
           
            
            <Nav />
        </>
    );
}


export default PaymentOptions;