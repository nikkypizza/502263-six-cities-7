import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';

import { AppRoute, DISABLED_CLASSNAME } from '../../const';


function SignIn({ isSignedIn = false }) {
  return (
    <ul className="header__nav-list">

      <li className="header__nav-item user">
        {isSignedIn ?
          <Link to={AppRoute.FAVORITES} className="header__nav-link header__nav-link--profile" >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
          </Link>
          :
          <Link to={AppRoute.LOGIN} className={`header__nav-link header__nav-link--profile ${window.location.pathname === AppRoute.LOGIN ? DISABLED_CLASSNAME : ''}`} >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__login">Sign in</span>
          </Link>}
      </li>

      {isSignedIn &&
        <li className="header__nav-item">
          <Link to={AppRoute.ROOT} className="header__nav-link" >
            <span className="header__signout">Sign out</span>
          </Link>
        </li>}
    </ul >
  );
}

SignIn.propTypes = {
  isSignedIn: bool,
};

export default SignIn;
