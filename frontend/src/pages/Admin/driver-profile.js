import tmp_avt from '../../assets/img/tmp_avt.jpg';
import { TbLockDollar } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

const DriverProfile = () => {

    return (    
        <>
            <div className='container'>
                <div className='card'>
                    <div className='profile-image'>
                        <img src={tmp_avt} alt='Customer Avatar' />
                    </div>
                    <div className="info">Phone: +84123 123 123</div>
                    <div className="info">Total trips: 123</div>
                    <div className="info">Email: Minhdp@gmail.com</div>
                    <div className="info">Rating: 4.8/5</div>

                </div>
                <button class="button update-state-1-btn">
                    <CiEdit /> Edit Driver
                </button>

                <button class="button update-state-1-btn">
                    <IoCall /> Call Driver
                </button>

                <button class='button update-state-2-btn'>
                    <TbLockDollar />Block Driver
                </button>
                <h2 style={{ color: 'red', textAlign: 'left'}}>Recent Trips</h2>
                <div className='card'>
                    <div id="trip-details-container">
                        <h2 id="trip-number">Trip #12345</h2>
                        <p id="date">July 22, 2024</p>
                        <p id="from">From: Titops</p>
                        <p id="to">To: 123 456 789</p>
                        <p id="price">$45,000</p>
                        <p id="rating">Rating: 4.9</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DriverProfile;