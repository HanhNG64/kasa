import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo_header.png';
import '../utils/header.scss';
import { useTheme } from '../hooks/kasaHooks.jsx';

function Header() {
  const { theme, toggleTheme } = useTheme();

  const homeClick = () => {
    if (theme === 'light') {
      toggleTheme();
    }
  };
  const aboutClick = () => {
    if (theme === 'dark') {
      toggleTheme();
    }
  };

  return (
    <header className="Header">
      <img src={logo} alt="Logo de Kasa" />
      <nav className="header-navigation">
        <NavLink
          onClick={homeClick}
          className={(nav) => (nav.isActive ? 'nav-link-active' : 'nav-link')}
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          onClick={aboutClick}
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
