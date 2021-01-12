import React from 'react'
import './Logo.css'

const Logo = (props) => {
  const { name } = props
  return (
    <>
      <div className="logo">
        <a href="#">{name}</a>
      </div>
    </>
  );
}
export default Logo;