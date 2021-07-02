import React from 'react';
import { connect } from 'react-redux';
import { adPropTypes } from '../../../propTypes/ad.js';
import { arrayOf } from 'prop-types';

import { reviewPropTypes } from '../../../propTypes/review.js';
import { convertRatingToStars, getPluralNoun } from '../../../util.js';
import { PremiumTagNames } from '../../premium-tag/settings.js';
import { CardListNames } from '../../card-list/settings.js';
import { MapCitySetting } from '../../../const.js';

import Header from '../../header/header';
import PremiumTag from '../../premium-tag/pemium-tag';
import ImagesList from '../../images-list/images-list';
import FeaturesList from '../../features-list/features-list';
import DescriptionList from '../../descritption-list/description-list';
import ReviewsList from '../../reviews-list/reviews-list.jsx';
import ReviewForm from '../../review-form/review-form.jsx';
import Map from '../../map/map.jsx';
import CardList from '../../card-list/card-list.jsx';


function OfferPage({ ad, reviews, adsNear }) {
  const { photos, title, isPremium, rating, offerType, bedroomsAmount, capacity, price, features, host, descriptions } = ad;
  return (
    <div className="page">
      <Header isSignedIn />
      <main className="page__main page__main--property">
        <section className="property">
          <ImagesList images={photos.all} />
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <PremiumTag variant={PremiumTagNames.OFFER} />}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
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
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''}`}>
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
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={MapCitySetting.AMSTERDAM} ads={adsNear} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardList ads={adsNear} variant={CardListNames.OFFER_PAGE} />
          </section>
        </div>
      </main>
    </div>
  );
}

OfferPage.propTypes = {
  ad: adPropTypes.isRequired,
  reviews: arrayOf(reviewPropTypes),
  adsNear: arrayOf(adPropTypes),
};

const mapStateToProps = ({ ads }) => ({ ad: ads[0] }); //  временный костыль пока не доберемся до этой страницы

export default connect(mapStateToProps)(OfferPage);
