import React from 'react';
import './Header.css'
import HeaderNav from '../HeaderNav/HeaderNav';
import DropDown from '../DropDown/DropDown';

const Header = (props) => {
  const {handleChange} = props
  return (
    <header className="header">
      <nav className="header-nav">
        <a href="/">Home</a>
        {sessionStorage.getItem("userName") && <a href="/myblog">My Blog</a>}
        <a href="/about-us">About Us</a>
        <a href="/contact-us">Contact Us</a>
        
      </nav>
      {/* <div> */}
      <nav className="header-nav">
        <DropDown handleChange={handleChange} />
        {!sessionStorage.getItem("userName") && <a href="/login">Login</a>}
        {sessionStorage.getItem("userName") && <a href="/logout">Logout</a>}
        {/* <HeaderNav /> */}
      </nav>
      {/* </div> */}
    </header>
  );
}
export default Header;