import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { string, bool, func } from 'prop-types';

import { AppRoute, AuthorizationStatus, UserRole } from '../../const';
import LoadWrapper from '../load-wrapper/load-wrapper';


function PrivateRoute({ render, path, exact, authorizationStatus, role = UserRole.VISITOR }) {
  const isAuthKnown = authorizationStatus !== AuthorizationStatus.UNKNOWN;
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;
  const isNotAuthorized = authorizationStatus === AuthorizationStatus.NO_AUTH;

  switch (role) {
    case UserRole.USER:
      return (
        <LoadWrapper isLoad={isAuthKnown}>
          <Route
            path={path}
            exact={exact}
            render={(routeProps) => isAuthorized ? render(routeProps) : <Redirect to={AppRoute.LOGIN} />}
          />
        </LoadWrapper>
      );

    default:
      return (
        <LoadWrapper isLoad={isAuthKnown}>
          <Route
            path={path}
            exact={exact}
            render={(routeProps) => isNotAuthorized ? render(routeProps) : <Redirect to={AppRoute.ROOT} />}
          />
        </LoadWrapper>
      );
  }
}

PrivateRoute.propTypes = {
  authorizationStatus: string.isRequired,
  exact: bool.isRequired,
  path: string.isRequired,
  render: func.isRequired,
  role: string.isRequired,
};

const mapStateToProps = ({ authorizationStatus }) => ({ authorizationStatus });


export { PrivateRoute };
export default connect(mapStateToProps)(PrivateRoute);
