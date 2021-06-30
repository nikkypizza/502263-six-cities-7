import { ActionCreator } from '../store/action';
import { APIRoute } from './api';
import { adaptAdsFormat } from '../util';

const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.ADS)
    .then(({data}) => {
      dispatch(ActionCreator.loadAds(adaptAdsFormat(data)));
      dispatch(ActionCreator.adsAreLoaded());
    }).catch((error) => {
      dispatch(ActionCreator.adsNotLoaded());
      throw error;
    })
);

export { fetchOffers };
