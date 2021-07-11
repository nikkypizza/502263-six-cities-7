import React from 'react';
import { string, arrayOf } from 'prop-types';
import { useSelector } from 'react-redux';

import { getAdSortingType } from '../../store/ui/selectors';
import { adPropTypes } from '../../propTypes/ad';
import { getPluralNoun, sortByKey } from '../../util';

import CardList from '../card-list/card-list';
import SortForm from '../sort-form/sort-form';


function CityPlaces({ ads, activeCity }) {
  const sortedAds = useSelector((state) => sortByKey(ads, getAdSortingType(state)));

  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${ads.length} ${getPluralNoun(ads.length, 'place')}`} to stay in {activeCity}</b>
      <SortForm />
      <CardList ads={sortedAds} />
    </>
  );
}

CityPlaces.propTypes = {
  ads: arrayOf(adPropTypes).isRequired,
  activeCity: string.isRequired,
};

export default CityPlaces;
