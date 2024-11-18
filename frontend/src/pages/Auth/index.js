import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import { useState, useEffect, useRef } from 'react';

const AuthIndex = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('login');
    const underlineRef = useRef(null);

    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
        navigate(`/${tab}`);
    };

    useEffect(() => {
        const activeTabElement = document.querySelector(`.tab-option.active`);
        if (activeTabElement) {
            const { offsetLeft, clientWidth } = activeTabElement;
            underlineRef.current.style.left = `${offsetLeft}px`;
            underlineRef.current.style.width = `${clientWidth}px`;
        }
    }, [activeTab]);

    return (
        <div className='container'>
            <div className='auth-card card'>
                <div className='tab-switcher'>
                    <div className={`tab-option ${activeTab === 'login' ? 'active' : ''}`} data-tab='login' onClick={() => handleTabSwitch('login')}>Login</div>
                    <div className={`tab-option ${activeTab === 'signup' ? 'active' : ''}`} data-tab='signup' onClick={() => handleTabSwitch('signup')}>Sign Up</div>
                    <div className='tab-underline' ref={underlineRef}></div>
                </div>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/' element={ <Navigate to='/login' /> } />
                </Routes>
            </div>
        </div>
    );
}

export default AuthIndex;