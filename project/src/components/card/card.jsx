import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { func, string } from 'prop-types';

import { adPropTypes } from '../../propTypes/ad.js';
import { convertRatingToStars } from '../../util.js';
import { componentVariants } from './settings.js';
import { AppRoute } from '../../const.js';

import PremiumTag from '../premium-tag/pemium-tag.jsx';


function Card({ data, variant, onMouseEnter, onMouseLeave }) {
  const { id, isPremium, price, photos, rating, title, offerType } = data;
  const { cardClassNameMod, imageWrapperClassNameMod } = componentVariants[variant];
  return (
    <article className={`${cardClassNameMod} place-card`}
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
    >
      {isPremium && <PremiumTag />}
      <div className={`${imageWrapperClassNameMod} place-card__image-wrapper`}>
        <Link to={{ pathname: generatePath(AppRoute.OFFER, { id }) }}>
          <img className="place-card__image" src={photos.main} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
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
    </article >
  );
}

Card.propTypes = {
  data: adPropTypes.isRequired,
  onMouseEnter: func.isRequired,
  onMouseLeave: func.isRequired,
  variant: string,
};

export default Card;
