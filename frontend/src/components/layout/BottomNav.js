import { useNavigate, useLocation } from 'react-router-dom';

function BottomNav(props){
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav className='bottom-nav'>
            {
                props.items.map((item, index) => (
                    <a key={index} onClick={() => navigate(item.path)} className={`nav-item ${location.pathname === item.path && 'active'}`}>
                        {location.pathname === item.path ? (
                            <item.iconActive className='icon'/>
                        ) : (
                            <item.icon className='icon'/>
                        )}
                        <span>{item.pageName}</span>
                    </a>
                ))
            }
        </nav>
    );
}

export default BottomNav;