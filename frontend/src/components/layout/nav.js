import './nav.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Nav(props){
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav className='bottom-nav'>
            {
                props.items.map((item, index) => (
                    <a key={index} onClick={() => navigate(item.path)} className={`nav-item ${location.pathname === item.path && 'active'}`}>
                        <item.icon className='icon'/>
                    </a>
                ))
            }
        </nav>
    );
}

export default Nav;