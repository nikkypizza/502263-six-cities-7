import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { arrayOf, bool, func, string } from 'prop-types';

import { sortByDate } from '../../../util.js';
import { AuthorizationStatus, MAX_REVIEWS_IN_AD, MAX_ADS_NEARBY } from '../../../const.js';
import { fetchAdsNearby, fetchFullAdInfo, fetchAdComments } from '../../../api/api-actions.js';
import { adPropTypes } from '../../../propTypes/ad.js';
import { reviewPropTypes } from '../../../propTypes/review.js';
import adaptCommentsFormat from '../../../adapters/comments.js';
import adaptAdsFormat from '../../../adapters/ads.js';
import { ActionCreator } from '../../../store/action.js';

import Header from '../../header/header';
import LoadWrapper from '../../load-wrapper/load-wrapper.jsx';
import OfferInfoWrapper from '../../offer-info-wrapper/offer-info-wrapper.jsx';


function OfferPage({ adId, fullAdInfo, reviews, adsNear, fullAdInfoLoaded, setfullAdInfoLoaded, loadFullAdInfo, loadComments, loadAdsNearby, isAuth }) {
  useEffect(() => {
    loadFullAdInfo(adId);
    loadComments(adId);
    loadAdsNearby(adId);

    return () => setfullAdInfoLoaded(false);
  }, [loadAdsNearby, loadComments, loadFullAdInfo, setfullAdInfoLoaded, adId]);

  return (
    <div className="page">
      <Header isSignedIn />
      <main className="page__main page__main--property">
        <LoadWrapper isLoad={fullAdInfoLoaded}>
          <OfferInfoWrapper info={fullAdInfo} reviews={reviews} adsNear={adsNear} isAuth={isAuth} adId={adId} />
        </LoadWrapper>
      </main>
    </div>
  );
}

OfferPage.propTypes = {
  reviews: arrayOf(reviewPropTypes),
  adsNear: arrayOf(adPropTypes),
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
  fullAdInfo: Object.keys(fullAdInfo).length ? adaptAdsFormat([fullAdInfo])[0] : fullAdInfo,
  reviews: adaptCommentsFormat(sortByDate(adComments.slice(-MAX_REVIEWS_IN_AD))),
  adsNear: adaptAdsFormat(adsNearby.slice(0, MAX_ADS_NEARBY)),
  isAuth: authorizationStatus === AuthorizationStatus.AUTH,
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
