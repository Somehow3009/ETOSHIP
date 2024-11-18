import './header.css';
import React from 'react';
import { FaBell, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Header(props) {
  const navigate = useNavigate()
  return (
    <header className={`header ${props.color === 'red' && 'header-red'}`}>
      <div className='header-content'>
          <div className='header-title'>{ props.pageName }</div>
          <div className='header-right'>
              {
                props.profileLink === undefined ? (
                  <FaBell className='noti-icon'/>
                ):(
                  <FaUser onClick={() => navigate(props.profileLink)}/>
                )
              }
              {
                props.img !== undefined && (
                  <div className="profile-pic">
                    <img src={props.img} alt='Avatar'></img>
                  </div>
                )
              }
          </div>
      </div>
    </header>
  );

}

export default Header;
