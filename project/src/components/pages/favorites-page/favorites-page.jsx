import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import { getFavouriteAdsByCityObj } from '../../../store/data/selectors.js';

import Header from '../../header/header';
import FavoritesList from '../../favourites-list/favourites-list.jsx';
import Footer from '../../footer/footer.jsx';
import FavouritesListEmpty from '../../favourites-empty/favourites-empty.jsx';

function FavoritesPage() {
  const adsObj = useSelector(getFavouriteAdsByCityObj);
  const isEmpty = !Object.keys(adsObj).length;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className={cn('favorites', { 'favorites--empty': isEmpty })}>
            {isEmpty ? <FavouritesListEmpty /> : <FavoritesList adsObj={adsObj} />}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
