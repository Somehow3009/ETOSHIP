import './nav.css'
import { FaHome, FaUser, FaWallet, FaListUl } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function Navigate(props){
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/customer'); 
  
      };
    
      const handleProfileClick = () => {
        navigate('/customer-profile'); 
    
        };
    return (
        <nav className="bottom-nav">
            <a href="#" className={`nav-item ${ props.active === 'home' && 'active'}`}>
                <FaHome  onClick={handleClick} className='icon'/>
            </a>
            <a href="#" className={`nav-item ${ props.active === 'user' && 'active'}`}>
                <FaUser onClick={handleProfileClick} className='icon'/>
            </a>
            <a href="#" className={`nav-item ${ props.active === 'wallet' && 'active'}`}>
                <FaWallet className='icon'/>
            </a>
            <a href="#" className={`nav-item ${ props.active === 'list' && 'active'}`}>
                <FaListUl className='icon'/>
            </a>
        </nav>
    );
}

export default Navigate;