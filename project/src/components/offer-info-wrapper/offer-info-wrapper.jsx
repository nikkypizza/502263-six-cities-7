import React from 'react';
import { arrayOf, bool, string } from 'prop-types';
import cn from 'classnames';

import { convertRatingToStars, getPluralNoun } from '../../util.js';
import { PremiumTagNames } from '../premium-tag/settings.js';
import { adPropTypes } from '../../propTypes/ad.js';
import { reviewPropTypes } from '../../propTypes/review.js';
import { MAX_PHOTOS_IN_AD } from '../../const.js';
import { CardListNames } from '../card-list/settings.js';
import { BookmarkNames } from '../bookmark-button/settings.js';

import PremiumTag from '../premium-tag/pemium-tag';
import ImagesList from '../images-list/images-list';
import FeaturesList from '../features-list/features-list';
import CardList from '../card-list/card-list.jsx';
import DescriptionList from '../descritption-list/description-list';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import ReviewForm from '../review-form/review-form.jsx';
import Map from '../map/map.jsx';
import BookmarkButton from '../bookmark-button/bookmark-button.jsx';


function OfferInfoWrapper({ info, reviews, adsNearby, adId, isAuth }) {
  const { photos, title, address, isPremium, isFavourite, rating, offerType, bedroomsAmount, capacity, price, features, host, descriptions } = info;

  const getMapAds = () => {
    const mapAds = adsNearby.slice();
    mapAds.push({ address });
    return mapAds;
  };

  return (
    <>
      <section className="property">
        <ImagesList images={photos.all.slice(0, MAX_PHOTOS_IN_AD)} />
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && <PremiumTag variant={PremiumTagNames.OFFER} />}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <BookmarkButton adId={+adId} isFavourite={isFavourite} variant={BookmarkNames.OFFER_PAGE} />
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: convertRatingToStars(rating) }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offerType}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {`${bedroomsAmount} ${getPluralNoun(bedroomsAmount, 'Bedroom')}`}
              </li>
              <li className="property__feature property__feature--adults">
                {`Max ${capacity} ${getPluralNoun(capacity, 'adult')}`}
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <FeaturesList features={features} />
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={cn('property__avatar-wrapper', 'user__avatar-wrapper', { 'property__avatar-wrapper--pro': host.isPro })}>
                  <img className="property__avatar user__avatar" src={host.userPic} width="74" height="74" alt={`Host ${host.name}`} />
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
                {host.isPro && <span className="property__user-status">Pro</span>}
              </div>
              <DescriptionList descriptions={descriptions} />
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
              <ReviewsList reviews={reviews} />
              {isAuth && <ReviewForm adId={adId} />}
            </section>
          </div>
        </div>
        {adsNearby.length &&
          <section className="property__map map">
            <Map city={address} ads={getMapAds()} />
          </section>}
      </section>
      <div className="container">
        <section className="near-places places">
          {!!adsNearby.length && <h2 className="near-places__title">Other places in the neighbourhood</h2>}
          <CardList ads={adsNearby} variant={CardListNames.OFFER_PAGE} />
        </section>
      </div>
    </>
  );
}

OfferInfoWrapper.propTypes = {
  reviews: arrayOf(reviewPropTypes),
  adsNearby: arrayOf(adPropTypes),
  info: adPropTypes,
  isAuth: bool.isRequired,
  adId: string,
};

export default OfferInfoWrapper;
