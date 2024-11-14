import './button.css';

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
  return (
      <div >
          <button className="confirm-button" onClick={onClick}>
        {text} Confirm Booking
      </button>
      </div>
    );
}

export default BookingButton;
export { ConfirmButton };
