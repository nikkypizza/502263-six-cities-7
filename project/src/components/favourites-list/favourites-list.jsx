import React from 'react';
import { arrayOf, func, objectOf } from 'prop-types';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../const.js';
import { adPropTypes } from '../../propTypes/ad.js';

import FavoritePlacesList from '../favourite-places-list/favourite-places-list.jsx';
import { changeCity } from '../../store/action.js';
import { connect } from 'react-redux';


function FavoritesList({ adsObj, changeCity }) {
  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(adsObj).map(([key, value]) => (
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
    </>
  );
}

FavoritesList.propTypes = {
  adsObj: objectOf(arrayOf(adPropTypes)),
  changeCity: func,
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(newCity) {
    dispatch(changeCity(newCity));
  },
});


export { FavoritesList };
export default connect(null, mapDispatchToProps)(FavoritesList);
