import React from 'react';

import { logoNames } from '../logo/settings';

import Logo from '../logo/logo';


function Footer() {
  return (
    <footer className="footer container">
      <Logo variant={logoNames.FOOTER} />
    </footer>
  );
}

export default Footer;
