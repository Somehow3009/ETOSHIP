import './button.css';
import { useNavigate } from 'react-router-dom';


function BookingButton({ text, onClick }){
    return (
        <div >
            <button className="booking-button" onClick={onClick}>
          {text} Estimate Fee
        </button>
        </div>
      );
}

function ConfirmButton ({ text, onClick }){
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/customer/payment'); 

    };
  return (
      <div >
          <button className="confirm-button" onClick={handleClick}>
        {text} Confirm Booking
      </button>
      </div>
    );
}

export default BookingButton;
export { ConfirmButton };
