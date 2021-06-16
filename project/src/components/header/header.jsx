import React from 'react';
import { bool } from 'prop-types';

import { AppRoute } from '../../const';

import Logo from '../logo/logo';
import SignIn from '../sign-in/sign-in';


function Header({ isSignedIn = false }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isDisabled={window.location.pathname === AppRoute.ROOT} />
          </div>
          <nav className="header__nav">
            <SignIn isSignedIn={isSignedIn}/>
          </nav>
        </div>
      </div>
    </header>

  );
}

Header.propTypes = {
  isSignedIn: bool,
};

export default Header;
