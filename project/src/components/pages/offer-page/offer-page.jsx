import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { string } from 'prop-types';

import { AuthorizationStatus, CommentSendStatus } from '../../../const.js';
import { getFullAdInfo, getFullAdInfoLoaded, getLimitedAdsNearby, getLimitedSortedComments } from '../../../store/data/selectors.js';
import { fetchAdsNearby, fetchFullAdInfo, fetchAdComments } from '../../../api/api-actions.js';
import { fullAdInfoLoaded as setFullAdInfoLoaded, setCommentPostError, setCommentSendStatus, setError } from '../../../store/action.js';
import { getAuthorizationStatus } from '../../../store/user/selectors.js';
import { getError, getIsCommentPostError } from '../../../store/ui/selectors.js';

import Header from '../../header/header';
import LoadWrapper from '../../load-wrapper/load-wrapper.jsx';
import OfferInfoWrapper from '../../offer-info-wrapper/offer-info-wrapper.jsx';
import Notification from '../../notification/notification.jsx';


function OfferPage({ adId }) {
  const dispatch = useDispatch();

  const reviews = useSelector(getLimitedSortedComments);
  const adsNearby = useSelector(getLimitedAdsNearby);
  const authStatus = useSelector(getAuthorizationStatus);
  const fullAdInfo = useSelector(getFullAdInfo);
  const fullAdInfoLoaded = useSelector(getFullAdInfoLoaded);
  const isPostError = useSelector(getIsCommentPostError);
  const errMessage = useSelector(getError);

  const onNotificationHide = () => {
    dispatch(setError(''));
    dispatch(setCommentPostError(false));
    dispatch(setCommentSendStatus(CommentSendStatus.DEFAULT));
  };

  useEffect(() => {
    dispatch(fetchFullAdInfo(adId));
    dispatch(fetchAdComments(adId));
    dispatch(fetchAdsNearby(adId));

    return () => dispatch(setFullAdInfoLoaded(false));
  }, [adId, dispatch]);

  return (
    <div className="page">
      {isPostError && <Notification message={errMessage} onNotificationHide={onNotificationHide}/>}

      <Header isSignedIn />
      <main className="page__main page__main--property">
        <LoadWrapper isLoad={fullAdInfoLoaded}>
          <OfferInfoWrapper info={fullAdInfo} reviews={reviews} adsNearby={adsNearby} isAuth={authStatus === AuthorizationStatus.AUTH} adId={adId} />
        </LoadWrapper>
      </main>
    </div>
  );
}

OfferPage.propTypes = {
  adId: string,
};

export default OfferPage;
