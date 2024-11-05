import React from 'react';
import { FaBell } from "react-icons/fa";
import './header.css';

function Header(props) {

  return (
    <header>
      <div className='page-name'>
        {props.pageName}
      </div>  
      <div className='notification'>
        <FaBell/>
      </div>
    </header>
  );

  // return (
  //   React.createElement(
  //     'header',
  //     null,

  //     React.createElement(
  //       'div',
  //       { className: 'page-name' },
  //       props.pageName
  //     ),

  //     React.createElement(
  //       'div',
  //       { className: 'navigate' },
  //       React.createElement(
  //         'a',
  //         null,
  //         <FaHome />
  //       ),

  //       React.createElement(
  //         'a',
  //         null,
  //         <FaUser />
  //       ),

  //       React.createElement(
  //         'a',
  //         null,
  //         <FaWallet />
  //       ),

  //       React.createElement(
  //         'a',
  //         null,
  //         <FaListUl />
  //       )
  //     ),

  //     React.createElement(
  //       'div',
  //       { className: 'bell-icon' },
  //       <FaBell size={24} />
  //     )
      
  //   )
  // );
}

export default Header;
