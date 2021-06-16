import React from 'react';
import { arrayOf } from 'prop-types';

import { adPropTypes } from '../../propTypes/ad.js';

import FavoritePlacesList from '../favourite-places-list/favourite-places-list.jsx';


function FavoritesList({ ads }) {
  const adsSortedByCity = ads.reduce((acc, it) => {
    if (!acc[it.city]) { acc[it.city] = []; }
    acc[it.city].push(it);
    return acc;
  }, {});

  return (
    <ul className="favorites__list">
      {Object.entries(adsSortedByCity).map(([key, value]) => (
        <li key={key} className="favorites__locations-items">

          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#"><span>{key}</span></a>
            </div>
          </div>
          <FavoritePlacesList places={value} />
        </li>
      ))}
    </ul>
  );
}

FavoritesList.propTypes = {
  ads: arrayOf(adPropTypes),
};

export default FavoritesList;
