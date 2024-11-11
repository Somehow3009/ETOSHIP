import React from 'react';
import { FaBell } from "react-icons/fa";
import './header.css';

function Header(props) {

  return (
    <header className="header">
      <div className="header-content">
          <div className="header-title">{props.pageName}</div>
          <div className="header-right">
              <FaBell />
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
