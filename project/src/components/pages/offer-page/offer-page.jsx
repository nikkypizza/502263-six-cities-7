import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { arrayOf, bool, func, string } from 'prop-types';

import { sortByDate } from '../../../util.js';
import { AuthorizationStatus, MAX_REVIEWS_IN_AD, MAX_ADS_NEARBY } from '../../../const.js';
import { fetchAdsNearby, fetchFullAdInfo, fetchAdComments } from '../../../api/api-actions.js';
import { adPropTypes } from '../../../propTypes/ad.js';
import { reviewPropTypes } from '../../../propTypes/review.js';
import { ActionCreator } from '../../../store/action.js';

import Header from '../../header/header';
import LoadWrapper from '../../load-wrapper/load-wrapper.jsx';
import OfferInfoWrapper from '../../offer-info-wrapper/offer-info-wrapper.jsx';


function OfferPage({ adId, fullAdInfo, reviews, adsNearby, fullAdInfoLoaded, setfullAdInfoLoaded, loadFullAdInfo, loadComments, loadAdsNearby, isAuth }) {
  useEffect(() => {
    loadFullAdInfo(adId);
    loadComments(adId);
    loadAdsNearby(adId);

    return () => setfullAdInfoLoaded(false);
  }, [adId]);

  return (
    <div className="page">
      <Header isSignedIn />
      <main className="page__main page__main--property">
        <LoadWrapper isLoad={fullAdInfoLoaded}>
          <OfferInfoWrapper info={fullAdInfo} reviews={reviews} adsNearby={adsNearby} isAuth={isAuth} adId={adId} />
        </LoadWrapper>
      </main>
    </div>
  );
}

OfferPage.propTypes = {
  reviews: arrayOf(reviewPropTypes),
  adsNearby: arrayOf(adPropTypes),
  fullAdInfo: adPropTypes,
  fullAdInfoLoaded: bool,
  setfullAdInfoLoaded: func,
  loadFullAdInfo: func,
  loadComments: func,
  loadAdsNearby: func,
  isAuth: bool.isRequired,
  adId: string,
};

const mapStateToProps = ({ fullAdInfoLoaded, authorizationStatus, fullAdInfo, adComments, adsNearby }) => ({
  reviews: sortByDate(adComments.slice(-MAX_REVIEWS_IN_AD)),
  isAuth: authorizationStatus === AuthorizationStatus.AUTH,
  adsNearby: adsNearby.slice(0, MAX_ADS_NEARBY),
  fullAdInfo,
  fullAdInfoLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  loadFullAdInfo(id) {
    dispatch(fetchFullAdInfo(id));
  },
  loadComments(id) {
    dispatch(fetchAdComments(id));
  },
  loadAdsNearby(id) {
    dispatch(fetchAdsNearby(id));
  },
  setfullAdInfoLoaded(isLoaded) {
    dispatch(ActionCreator.fullAdInfoLoaded(isLoaded));
  },
});

export { OfferPage };
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
