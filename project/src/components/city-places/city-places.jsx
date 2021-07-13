import React from 'react';
import { string, arrayOf } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getAdSortingType } from '../../store/ui/selectors';
import { adPropTypes } from '../../propTypes/ad';
import { getPluralNoun, sortByKey } from '../../util';
import { changeFocusedAdId } from '../../store/action';

import CardList from '../card-list/card-list';
import SortForm from '../sort-form/sort-form';


function CityPlaces({ ads, activeCity }) {
  const dispatch = useDispatch();
  const sortedAds = useSelector((state) => sortByKey(ads, getAdSortingType(state)));

  const onMouseAction = (id)  => dispatch(changeFocusedAdId(id));

  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${ads.length} ${getPluralNoun(ads.length, 'place')}`} to stay in {activeCity}</b>
      <SortForm />
      <CardList ads={sortedAds} onMouseEnter={onMouseAction} onMouseLeave={onMouseAction}/>
    </>
  );
}

CityPlaces.propTypes = {
  ads: arrayOf(adPropTypes).isRequired,
  activeCity: string.isRequired,
};

export default CityPlaces;
