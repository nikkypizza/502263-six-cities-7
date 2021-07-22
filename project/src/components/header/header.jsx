import React from 'react';

import { AppRoute } from '../../const';

import Logo from '../logo/logo';
import SignIn from '../sign-in/sign-in';


function Header() {
  return (
    <header className="header" data-testid='page-header'>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isDisabled={window.location.pathname === AppRoute.ROOT} />
          </div>
          <nav className="header__nav">
            <SignIn />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
