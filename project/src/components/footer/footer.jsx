import React from 'react';
import { node } from 'prop-types';


function Footer({ children }) {
  return (
    <footer className="footer container">
      {children}
    </footer>
  );
}

Footer.propTypes = {
  children: node,
};

export default Footer;
