import './Payment.css';

function AddPaymentMethodButton({ text, onClick }){
    return (
        <div >
            <button className="add-payment-method-button" onClick={onClick}>
          {text} Add Payment Method
        </button>
        </div>
      );
}

function ProceedButton({ text, onClick }){
    return (
        <div >
            <button className="proceed-button" onClick={onClick}>
          {text} Proceed with Payment
        </button>
        </div>
      );
}




export default AddPaymentMethodButton;
export { ProceedButton };