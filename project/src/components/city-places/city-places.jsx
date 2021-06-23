import React from 'react';
import { string, arrayOf } from 'prop-types';
import { adPropTypes } from '../../propTypes/ad';

import CardList from '../card-list/card-list';


function CityPlaces({ ads, activeCity }) {
  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${ads.length} ${ads.length === 1 ? 'place' : 'places'}`} to stay in {activeCity}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom">
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>

      <CardList ads={ads} />
    </>
  );
}

CityPlaces.propTypes = {
  ads: arrayOf(adPropTypes).isRequired,
  activeCity: string.isRequired,
};

export default CityPlaces;


