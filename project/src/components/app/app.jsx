import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { arrayOf, object } from 'prop-types';
import {AppRoute} from '../../const';

import MainPage from '../pages/main-page/main-page.jsx';
import LoginPage from '../pages/login-page/login-page.jsx';
import FavoritesPage from '../pages/favorites-page/favorites-page.jsx';
import NotFoundPage from '../pages/not-found-page/not-found-page.jsx';
import OfferPage from '../pages/offer-page/offer-page.jsx';


function App({ ads }) {
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
          <FavoritesPage />
        </Route>

        <Route path={AppRoute.OFFER} exact>
          <OfferPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  ads: arrayOf(object).isRequired,
};

export default App;
