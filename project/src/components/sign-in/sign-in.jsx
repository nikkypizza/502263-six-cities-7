import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';

import { AppRoute, DISABLED_CLASSNAME } from '../../const';
import { componentVariants, SignInNames } from './settings';


function SignIn({ isSignedIn = false }) {
  const { actionLinkHref, textNodeClassname } = componentVariants[isSignedIn ? SignInNames.SIGNED_IN : SignInNames.NOT_SIGNED_IN];
  return (
    <ul className="header__nav-list">

      <li className="header__nav-item user">
        <Link to={actionLinkHref} className={`header__nav-link header__nav-link--profile ${!isSignedIn && window.location.pathname === AppRoute.LOGIN ? DISABLED_CLASSNAME : ''}`} >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className={textNodeClassname}>
            {isSignedIn ? 'Oliver.conner@gmail.com' : 'Sign in'}
          </span>
        </Link>
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
