import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">fitness & wealth</div>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        
      </ul>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
