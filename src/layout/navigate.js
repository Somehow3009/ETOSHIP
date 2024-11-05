import './navigate.css'
import { FaHome, FaUser, FaWallet, FaListUl } from 'react-icons/fa'

function Navigate(props){
    return (
        <div className='container navigate'>
            <a href='/'>
                <FaHome className='icon'/>
            </a>
            <a href='/'>
                <FaUser className='icon'/>
            </a>
            <a href='/'>
                <FaWallet className='icon'/>
            </a>
            <a href='/'>
                <FaListUl className='icon'/>
            </a>
      </div>
    );
}

export default Navigate;