import './booking-button.css'

function Button({ text, onClick }){
    return (
        <div className='container'>
            <button className="custom-button" onClick={onClick}>
          {text} Book Now
        </button>
        </div>
      );
}

export default Button;