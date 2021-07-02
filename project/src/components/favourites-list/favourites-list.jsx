import React from 'react';
import { arrayOf, func } from 'prop-types';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../const.js';
import { adPropTypes } from '../../propTypes/ad.js';

import FavoritePlacesList from '../favourite-places-list/favourite-places-list.jsx';
import { ActionCreator } from '../../store/action.js';
import { connect } from 'react-redux';


function FavoritesList({ ads, changeCity }) {
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
              <Link className="locations__item-link" onClick={({ target }) => changeCity(target.textContent)} to={AppRoute.ROOT}>
                <span>{key}</span>
              </Link>
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
  changeCity: func,
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(newCity) {
    dispatch(ActionCreator.changeCity(newCity));
  },
});


export { FavoritesList };
export default connect(null, mapDispatchToProps)(FavoritesList);
