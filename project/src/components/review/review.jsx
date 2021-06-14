import React from 'react';

import { convertRatingToStars, generateMonthYearDate } from '../../util.js';
import { reviewPropTypes } from '../../propTypes/review.js';


function Review({ reviewItem }) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={reviewItem.author.userPic} width="54" height="54" alt={`Avatar of ${reviewItem.author.name}`} />
        </div>
        <span className="reviews__user-name">
          {reviewItem.author.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating" title={`Rating: ${reviewItem.rating}`}>
          <div className="reviews__stars rating__stars">
            <span style={{ width: convertRatingToStars(reviewItem.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewItem.review}
        </p>
        <time className="reviews__time" dateTime={reviewItem.date}>
          {generateMonthYearDate(reviewItem.date)}
        </time>
      </div>
    </li>
  );
}

Review.propTypes = {
  reviewItem: reviewPropTypes.isRequired,
};

export default Review;
