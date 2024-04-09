import './footer.scss';
import React from 'react';
import logo from '../../assets/logo_footer.png';

function Footer() {
  return (
    <footer className="Footer">
      <img src={logo} alt="Logo de Kasa" />
      <p style={{ color: 'white' }}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
