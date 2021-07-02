import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { string, bool, func } from 'prop-types';

import { AppRoute, AuthorizationStatus } from '../../const';


function PrivateRoute({ render, path, exact, authorizationStatus }) {
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => isAuthorized ? render(routeProps) : <Redirect to={AppRoute.LOGIN} />}
    />
  );
}

PrivateRoute.propTypes = {
  authorizationStatus: string.isRequired,
  exact: bool.isRequired,
  path: string.isRequired,
  render: func.isRequired,
};

const mapStateToProps = ({ authorizationStatus }) => ({ authorizationStatus });


export { PrivateRoute };
export default connect(mapStateToProps)(PrivateRoute);
