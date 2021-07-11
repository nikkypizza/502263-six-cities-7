import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { AppRoute, AuthorizationStatus, DISABLED_CLASSNAME } from '../../const';
import { componentVariants, SignInNames } from './settings';
import { logout } from '../../api/api-actions';
import { getAuthInfo, getAuthorizationStatus } from '../../store/user/selectors';


function SignIn() {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const userInfo = useSelector(getAuthInfo);

  const isSignedIn = authorizationStatus === AuthorizationStatus.AUTH;
  const { actionLinkHref, textNodeClassname } = componentVariants[isSignedIn ? SignInNames.SIGNED_IN : SignInNames.NOT_SIGNED_IN];

  return (
    <ul className="header__nav-list">

      <li className="header__nav-item user">
        <Link to={actionLinkHref} className={cn('header__nav-link', 'header__nav-link--profile', !isSignedIn && window.location.pathname === AppRoute.LOGIN && DISABLED_CLASSNAME)} >
          <div className="header__avatar-wrapper user__avatar-wrapper" style={userInfo?.avatar_url && { backgroundImage: `url(${userInfo?.avatar_url})` }}></div>
          <span className={textNodeClassname}>
            {isSignedIn ? userInfo?.email : 'Sign in'}
          </span>
        </Link>
      </li>

      {isSignedIn &&
        <li className="header__nav-item">
          <Link to={AppRoute.ROOT} onClick={() => dispatch(logout())} className="header__nav-link" >
            <span className="header__signout">Sign out</span>
          </Link>
        </li>}
    </ul >
  );
}

export default SignIn;
