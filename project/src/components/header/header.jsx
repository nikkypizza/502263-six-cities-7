import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';

import { AppRoute, DISABLED_CLASSNAME } from '../../const';

import Logo from '../logo/logo';


function Header({ isSignedIn = false }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isDisabled={window.location.pathname === AppRoute.ROOT} />
          </div>
          <nav className="header__nav">
            {isSignedIn
              ?
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
              :
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className={`header__nav-link header__nav-link--profile ${window.location.pathname === AppRoute.LOGIN ? DISABLED_CLASSNAME : ''}`} to={AppRoute.LOGIN}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>}
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
