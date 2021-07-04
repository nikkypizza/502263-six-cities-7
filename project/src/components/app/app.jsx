import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { arrayOf } from 'prop-types';

import { AppRoute, AuthorizationStatus } from '../../const.js';
import { reviewPropTypes } from '../../propTypes/review.js';
import { OFFERS_NEAR_DATA } from '../../mocks/offers-near.js';

import withPrivateRoute from '../../hoc/withPrivateRoute.jsx';
import MainPage from '../pages/main-page/main-page.jsx';
import LoginPage from '../pages/login-page/login-page.jsx';
import FavoritesPage from '../pages/favorites-page/favorites-page.jsx';
import NotFoundPage from '../pages/not-found-page/not-found-page.jsx';
import OfferPage from '../pages/offer-page/offer-page.jsx';
import LoadWrapper from '../load-wrapper/load-wrapper.jsx';

function App({ reviews }) {
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

        <Route path={AppRoute.OFFER} exact>
          <OfferPage reviews={reviews} adsNear={OFFERS_NEAR_DATA} />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  reviews: arrayOf(reviewPropTypes),
};

export default App;
