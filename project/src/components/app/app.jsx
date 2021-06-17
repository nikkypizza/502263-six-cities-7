import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { arrayOf } from 'prop-types';

import { AppRoute } from '../../const.js';
import { adPropTypes } from '../../propTypes/ad.js';
import { reviewPropTypes } from '../../propTypes/review.js';
import { OFFERS_NEAR_DATA } from '../../mocks/offers-near.js';

import MainPage from '../pages/main-page/main-page.jsx';
import LoginPage from '../pages/login-page/login-page.jsx';
import FavoritesPage from '../pages/favorites-page/favorites-page.jsx';
import NotFoundPage from '../pages/not-found-page/not-found-page.jsx';
import OfferPage from '../pages/offer-page/offer-page.jsx';


function App({ ads, reviews }) {
  return (
    <BrowserRouter>
      <Switch>

        <Route path={AppRoute.ROOT} exact>
          <MainPage ads={ads} />
        </Route>

        <Route path={AppRoute.LOGIN} exact>
          <LoginPage />
        </Route>

        <Route path={AppRoute.FAVORITES} exact>
          <FavoritesPage ads={ads}/>
        </Route>

        <Route path={AppRoute.OFFER} exact>
          <OfferPage ad={ads[1]} reviews={reviews} adsNear={OFFERS_NEAR_DATA}/>
        </Route>

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  ads: arrayOf(adPropTypes).isRequired,
  reviews: arrayOf(reviewPropTypes),
};

export default App;
