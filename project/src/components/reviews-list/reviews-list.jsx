import React from 'react';
import { arrayOf } from 'prop-types';

import { reviewPropTypes } from '../../propTypes/review.js';

import Review from '../review/review.jsx';


function ReviewsList({ reviews }) {
  return <ul className="reviews__list">{reviews.map((it) => <Review key={it.id} reviewItem={it}/>)}</ul>;
}

ReviewsList.propTypes = {
  reviews: arrayOf(reviewPropTypes),
};

export default ReviewsList;
