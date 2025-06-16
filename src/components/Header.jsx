import React from 'react';
import logo from '../assets/Healthandwellness.jpg';
import './Header.css'; // Link to your styles

const Header = () => {
  return (
    <header className="header-container">
      <img src={logo} alt="Health and Wellness" className="header-image" />
    </header>
  );
};

export default Header;
