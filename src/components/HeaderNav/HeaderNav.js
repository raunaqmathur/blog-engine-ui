import React, { useState } from 'react'
import './HeaderNav.css'

const HeaderNav = (props) => {

  const [searchBox, setSearchBox] = useState(false);

  const submit = (e) => {
    e.preventDefault();
  }

  const showSearchBox = () => {
    console.log("Hi");
    setSearchBox(true);
  }
  // const searchInputClass = searchBox ? 'search-input active' : 'search-input';
  const searchInputClass = 'search-input active';

  return (
    <div className="header-nav">
      <div className="search">
        <form onSubmit={submit}>
          <input className={searchInputClass} type="text" placeholder="Search" />
          <img onClick={showSearchBox} className="search-image" src={require('../../assets/icons/searchIcon.png')} alt="Search" />
        </form>
      </div>
    </div>
  );
}
export default HeaderNav;