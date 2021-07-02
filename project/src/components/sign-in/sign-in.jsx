import React from 'react';
import { func, string } from 'prop-types';
import { Link } from 'react-router-dom';

import { authInfoPropTypes } from '../../propTypes/authInfo';
import { AppRoute, AuthorizationStatus, DISABLED_CLASSNAME } from '../../const';
import { componentVariants, SignInNames } from './settings';
import { connect } from 'react-redux';
import { logout } from '../../api/api-actions';


function SignIn({ authorizationStatus, authInfo, logoutUser }) {
  const isSignedIn = authorizationStatus === AuthorizationStatus.AUTH;
  const { actionLinkHref, textNodeClassname } = componentVariants[isSignedIn ? SignInNames.SIGNED_IN : SignInNames.NOT_SIGNED_IN];
  return (
    <ul className="header__nav-list">

      <li className="header__nav-item user">
        <Link to={actionLinkHref} className={`header__nav-link header__nav-link--profile ${!isSignedIn && window.location.pathname === AppRoute.LOGIN ? DISABLED_CLASSNAME : ''}`} >
          <div className="header__avatar-wrapper user__avatar-wrapper" style={authInfo?.avatar_url && { backgroundImage: `url(${authInfo.avatar_url})` }}></div>
          <span className={textNodeClassname}>
            {isSignedIn ? authInfo?.email : 'Sign in'}
          </span>
        </Link>
      </li>

      {isSignedIn &&
        <li className="header__nav-item">
          <Link to={AppRoute.ROOT} onClick={logoutUser} className="header__nav-link" >
            <span className="header__signout">Sign out</span>
          </Link>
        </li>}
    </ul >
  );
}

SignIn.propTypes = {
  authorizationStatus: string.isRequired,
  authInfo: authInfoPropTypes,
  logoutUser: func,
};

const mapStateToProps = ({ authorizationStatus, authInfo }) => ({ authorizationStatus, authInfo });

const mapDispatchToProps = (dispatch) => ({
  logoutUser() {
    dispatch(logout());
  },
});

export { SignIn };
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
