import React from 'react';
import { Redirect } from 'react-router-dom';

import { AppRoute } from '../const';


const withPrivateRoute = (Component, isAuth, URL = AppRoute.ROOT) => {
  function WithPrivateRoute(props) {
    return isAuth ? <Component {...props} /> : <Redirect to={URL} />;
  }
  return WithPrivateRoute;
};

export default withPrivateRoute;
