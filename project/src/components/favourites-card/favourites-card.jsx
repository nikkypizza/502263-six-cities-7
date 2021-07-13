import React from 'react';
import { generatePath, Link } from 'react-router-dom';

import { adPropTypes } from '../../propTypes/ad.js';
import { AppRoute } from '../../const.js';
import { convertRatingToStars } from '../../util.js';
import BookmarkButton from '../bookmark-button/bookmark-button.jsx';


function FavouritesCard({ data }) {
  const { id, price, photos, rating, title, offerType, isFavourite } = data;
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={{ pathname: generatePath(AppRoute.OFFER, { id }) }}>
          <img className="place-card__image" src={photos.main} width="150" height="110" alt="Property view" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton adId={id} isFavourite={isFavourite} />
        </div>
        <div className="place-card__rating rating" title={`Rating: ${rating}`}>
          <div className="place-card__stars rating__stars">
            <span style={{ width: convertRatingToStars(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{ pathname: generatePath(AppRoute.OFFER, { id }) }}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{offerType}</p>
      </div>
    </article>
  );
}

FavouritesCard.propTypes = {
  data: adPropTypes.isRequired,
};

export default FavouritesCard;


