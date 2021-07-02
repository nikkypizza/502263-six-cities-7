import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { arrayOf } from 'prop-types';

import { AppRoute } from '../../const.js';
import { reviewPropTypes } from '../../propTypes/review.js';
import { OFFERS_NEAR_DATA } from '../../mocks/offers-near.js';

import MainPage from '../pages/main-page/main-page.jsx';
import LoginPage from '../pages/login-page/login-page.jsx';
import FavoritesPage from '../pages/favorites-page/favorites-page.jsx';
import NotFoundPage from '../pages/not-found-page/not-found-page.jsx';
import OfferPage from '../pages/offer-page/offer-page.jsx';
import PrivateRoute from '../private-route/private-route.jsx';


function App({ reviews }) {
  return (
    <BrowserRouter>
      <Switch>

        <Route path={AppRoute.ROOT} exact>
          <MainPage />
        </Route>

        <Route path={AppRoute.LOGIN} exact>
          <LoginPage />
        </Route>

        <PrivateRoute path={AppRoute.FAVORITES} render={() => <FavoritesPage />} exact />

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
