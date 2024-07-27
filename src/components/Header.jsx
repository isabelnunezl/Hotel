import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/imagenes/logo.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header" id="navigation-menu">
      <div className="container">
        <nav>
          <a href="#" className="logo">
            <img src={logo} alt="Logo" />
          </a>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li>
              <button
                type="button"
                className="nav-link"
                onClick={() => {
                  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
                  closeMenu();
                }}
              >
                Home
              </button>
            </li>
          </ul>
          <div className={`hambuger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
