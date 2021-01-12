import React from 'react';
import './Header.css'
import HeaderNav from '../HeaderNav/HeaderNav';

const Header = (props) => {
  return (
    <header className="header">
      <nav className="header-nav">
        <a href="/">Home</a>
        <a href="/about-us">About Us</a>
        <a href="/contact-us">Contact Us</a>
      </nav>
      {/* <div> */}
      <nav className="header-nav">
        <a href="/login">Login</a>
        {/* <HeaderNav /> */}
      </nav>
      {/* </div> */}
    </header>
  );
}
export default Header;