import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppRoute, AuthorizationStatus } from '../../const.js';

import withPrivateRoute from '../../hoc/withPrivateRoute.jsx';
import MainPage from '../pages/main-page/main-page.jsx';
import LoginPage from '../pages/login-page/login-page.jsx';
import FavoritesPage from '../pages/favorites-page/favorites-page.jsx';
import NotFoundPage from '../pages/not-found-page/not-found-page.jsx';
import OfferPage from '../pages/offer-page/offer-page.jsx';
import LoadWrapper from '../load-wrapper/load-wrapper.jsx';

function App() {
  const authStatus = useSelector(({ authorizationStatus }) => authorizationStatus);
  const isAuthKnown = authStatus !== AuthorizationStatus.UNKNOWN;

  const LoginPagePrivate = withPrivateRoute(
    LoginPage,
    authStatus === AuthorizationStatus.NO_AUTH,
  );

  const FavouritesPagePrivate = withPrivateRoute(
    FavoritesPage,
    authStatus === AuthorizationStatus.AUTH,
    AppRoute.LOGIN,
  );

  return (
    <BrowserRouter>
      <Switch>

        <Route path={AppRoute.ROOT} exact>
          <MainPage />
        </Route>

        <Route path={AppRoute.LOGIN} exact>
          <LoadWrapper isLoad={isAuthKnown}>
            <LoginPagePrivate />
          </LoadWrapper>
        </Route>

        <Route path={AppRoute.FAVORITES} exact>
          <LoadWrapper isLoad={isAuthKnown}>
            <FavouritesPagePrivate />
          </LoadWrapper>
        </Route>

        <Route exact path={`${AppRoute.OFFER}/:id`} render={({ match }) => <OfferPage adId={match.params.id} />} />

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
