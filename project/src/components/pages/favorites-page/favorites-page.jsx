import React from 'react';
import { arrayOf } from 'prop-types';

import { adPropTypes } from '../../../propTypes/ad.js';
import { logoNames } from '../../logo/settings.js';

import Header from '../../header/header';
import Logo from '../../logo/logo.jsx';
import FavoritesList from '../../favourites-list/favourites-list.jsx';
import Footer from '../../footer/footer.jsx';


function FavoritesPage({ ads }) {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList ads={ads} />
          </section>
        </div>
      </main>
      <Footer>
        <Logo variant={logoNames.FOOTER} />
      </Footer>
    </div>
  );
}

FavoritesPage.propTypes = {
  ads: arrayOf(adPropTypes).isRequired,
};

export default FavoritesPage;
