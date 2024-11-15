import './Payment.css';
import { useNavigate } from 'react-router-dom';


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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/trip-tracking'); 

    };
    return (
        <div >
            <button className="proceed-button" onClick={handleClick}>
          {text} Proceed with Payment
        </button>
        </div>
      );
}




export default AddPaymentMethodButton;
export { ProceedButton };