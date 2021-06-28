import React from 'react';
import { string, arrayOf } from 'prop-types';
import { adPropTypes } from '../../propTypes/ad';

import { getPluralNoun } from '../../util';
import CardList from '../card-list/card-list';
import SortForm from '../sort-form/sort-form';


function CityPlaces({ ads, activeCity }) {
  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${ads.length} ${getPluralNoun(ads.length, 'place')}`} to stay in {activeCity}</b>
      <SortForm />
      <CardList ads={ads} />
    </>
  );
}

CityPlaces.propTypes = {
  ads: arrayOf(adPropTypes).isRequired,
  activeCity: string.isRequired,
};

export default CityPlaces;


