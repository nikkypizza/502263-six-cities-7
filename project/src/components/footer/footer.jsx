import React from 'react';

import { LogoNames } from '../logo/settings';

import Logo from '../logo/logo';


function Footer() {
  return (
    <footer className="footer container">
      <Logo variant={LogoNames.FOOTER} />
    </footer>
  );
}

export default Footer;
