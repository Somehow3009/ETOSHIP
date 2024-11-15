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
                
            </div>
        </>
    );
}

export default DriverProfile;