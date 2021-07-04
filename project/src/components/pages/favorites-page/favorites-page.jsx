import React from 'react';
import { arrayOf, objectOf } from 'prop-types';
import { connect } from 'react-redux';
import cn from 'classnames';

import { adPropTypes } from '../../../propTypes/ad.js';
import { getAdsByCityObj } from '../../../util.js';

import Header from '../../header/header';
import FavoritesList from '../../favourites-list/favourites-list.jsx';
import Footer from '../../footer/footer.jsx';
import FavouritesListEmpty from '../../favourites-empty/favourites-empty.jsx';


function FavoritesPage({ adsObj }) {
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

FavoritesPage.propTypes = {
  adsObj: objectOf(arrayOf(adPropTypes)),
};

const mapStateToProps = ({ ads }) => ({ adsObj: getAdsByCityObj(ads.filter((it) => it.isFavourite)) });

export { FavoritesPage };
export default connect(mapStateToProps)(FavoritesPage);
