import './booking-button.css'
import { useNavigate } from 'react-router-dom';

function Button({ text, onClick }){
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/booking-interface'); 

    };
    return (
        <div>
            <button className="custom-button" onClick={handleClick}>
          {text} Book Now
        </button>
        </div>
      );
}

export default Button;