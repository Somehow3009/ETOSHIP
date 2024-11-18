import { FaLocationDot } from "react-icons/fa6";
import { GrLocationPin } from "react-icons/gr";
import './request.css';

function Request(props){
    return (

        <div>
          <div className="card">
          <div className="request-container">
            <span className="icon"><FaLocationDot /></span>
            <input
              type="text"
              placeholder="Pickup Location"
              className="input"
            />
          </div>
          </div>

          <div className="card">
          <div className="request-container">
            <span className="icon"><GrLocationPin /></span>
            <input
              type="text"
              placeholder="Drop-off Location"
              className="input"

            />
          </div>
          </div>
        </div>  
    );
}

export default Request;

