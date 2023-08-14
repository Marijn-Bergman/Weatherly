import React from 'react';
import logo from '../components/images/logo.svg';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
        <h1></h1>
      </div>
    </header>
  );
};

export default Header;
