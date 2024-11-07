import './nav.css'
import { FaHome, FaUser, FaWallet, FaListUl } from 'react-icons/fa'

function Navigate(props){
    return (
        <nav className="bottom-nav">
            <a href="#" className={`nav-item ${ props.active === 'home' && 'active'}`}>
                <FaHome className='icon'/>
            </a>
            <a href="#" className={`nav-item ${ props.active === 'user' && 'active'}`}>
                <FaUser className='icon'/>
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