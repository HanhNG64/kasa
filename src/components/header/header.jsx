import './header.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo_header.png';

function Header() {
  return (
    <header className="Header">
      <img src={logo} alt="Logo de Kasa" />
      <nav className="header-navigation">
        <NavLink
          className={(nav) => (nav.isActive ? 'nav-link-active' : 'nav-link')}
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={(nav) => (nav.isActive ? 'nav-link-active' : 'nav-link')}
          to="/about"
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
