import React from 'react';
import { generatePath, Link } from 'react-router-dom';

import { adPropTypes } from '../../propTypes/ad.js';
import { AppRoute } from '../../const.js';
import { convertRatingToStars } from '../../util.js';


function FavouritesCard({ data }) {
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={{ pathname: generatePath(AppRoute.OFFER, { id: data.id }) }}>
          <img className="place-card__image" src={data.photos.main} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{data.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating" title={`Rating: ${data.rating}`}>
          <div className="place-card__stars rating__stars">
            <span style={{ width: convertRatingToStars(data.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{ pathname: generatePath(AppRoute.OFFER, { id: data.id }) }}>
            {data.title}
          </Link>
        </h2>
        <p className="place-card__type">{data.offerType}</p>
      </div>
    </article>
  );
}

FavouritesCard.propTypes = {
  data: adPropTypes.isRequired,
};

export default FavouritesCard;


