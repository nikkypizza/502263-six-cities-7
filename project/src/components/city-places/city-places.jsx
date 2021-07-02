import React from 'react';
import { string, arrayOf } from 'prop-types';
import { adPropTypes } from '../../propTypes/ad';

import { getPluralNoun, sortByKey } from '../../util';
import CardList from '../card-list/card-list';
import SortForm from '../sort-form/sort-form';
import { connect } from 'react-redux';


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

const mapStateToProps = (state, ownProps) => ({
  ads: sortByKey(ownProps.ads, state.adSortingType),
});

export { CityPlaces };
export default connect(mapStateToProps)(CityPlaces);


