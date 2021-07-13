import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { favouriteAdsAreLoaded, getFavouriteAds } from '../../../store/data/selectors.js';
import { fetchFavouriteAds } from '../../../api/api-actions.js';
import { setFavouriteAdsAreLoaded } from '../../../store/action.js';

import Header from '../../header/header';
import FavoritesList from '../../favourites-list/favourites-list.jsx';
import Footer from '../../footer/footer.jsx';
import FavouritesListEmpty from '../../favourites-empty/favourites-empty.jsx';
import LoadWrapper from '../../load-wrapper/load-wrapper.jsx';


function FavoritesPage() {
  const dispatch = useDispatch();
  const adsObj = useSelector(getFavouriteAds);
  const adsAreLoaded = useSelector(favouriteAdsAreLoaded);
  const isEmpty = adsAreLoaded && !Object.keys(adsObj).length;

  useEffect(() => {
    dispatch(fetchFavouriteAds());

    return dispatch(setFavouriteAdsAreLoaded(false));
  }, [dispatch]);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className={cn('favorites', { 'favorites--empty': isEmpty })}>
            <LoadWrapper isLoad={adsAreLoaded}>
              {isEmpty ? <FavouritesListEmpty /> : <FavoritesList adsObj={adsObj} />}
            </LoadWrapper>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
