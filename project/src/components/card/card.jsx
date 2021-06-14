import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { func } from 'prop-types';

import { adPropTypes } from '../../propTypes/ad.js';
import { convertRatingToStars } from '../../util.js';
import { AppRoute } from '../../const.js';

import PremiumTag from '../premium-tag/pemium-tag.jsx';


function Card({ data, onMouseEnter, onMouseLeave }) {
  return (
    <article className="cities__place-card place-card"
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
    >
      {data.isPremium && <PremiumTag />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={{ pathname: generatePath(AppRoute.OFFER, { id: data.id }) }}>
          <img className="place-card__image" src={data.photos.main} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{data.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating" title={`Rating: ${data.rating}`}>
          <div className="place-card__stars rating__stars">
            <span style={{ width:  convertRatingToStars(data.rating) }}></span>
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
    </article >
  );
}

Card.propTypes = {
  data: adPropTypes.isRequired,
  onMouseEnter: func.isRequired,
  onMouseLeave: func.isRequired,
};

export default Card;
