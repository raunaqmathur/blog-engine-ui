import React from 'react';
import './Footer.css'

const Footer = (props) => {
  const {handleChange} = props
  return (
    <header className="header">
      <nav className="header-nav">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  );
}
export default Footer;