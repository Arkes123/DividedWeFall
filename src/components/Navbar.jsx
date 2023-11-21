
import '../App.css';
import React from 'react';
import HamburgerIcon from '../images/hambugrer.svg';

const Navbar = () => {
  return (
    <header>
      <img className="hamburger-icon" src={HamburgerIcon} alt="Hamburger Menu" />
      <div className="title-container">
        <h1 id="nav-title">Divided We Fall</h1>
        <h6 id="subnav-title">Political Sentiment Analysis</h6>
      </div>
    </header>
  );
};

export default Navbar;