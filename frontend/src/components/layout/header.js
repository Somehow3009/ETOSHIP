import React from 'react';
import { FaUser } from "react-icons/fa";
import './header.css';
import { useNavigate } from 'react-router-dom';


function Header(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/customer/profile'); 

    };
  return (
    <header className="header">
      <div className="header-content">
          <div className="header-title">{props.pageName}</div>
          <div className="header-right">
              <FaUser onClick={handleClick}/>
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
