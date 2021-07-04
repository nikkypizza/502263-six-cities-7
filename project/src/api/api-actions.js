import { ActionCreator } from '../store/action';
import adaptAdsFormat from '../adapters/ads';
import { APIRoute, AuthorizationStatus } from '../const';

const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.ADS)
    .then(({data}) => {
      dispatch(ActionCreator.loadAds(adaptAdsFormat(data)));
      dispatch(ActionCreator.adsAreLoaded(true));
    }).catch((error) => {
      dispatch(ActionCreator.adsAreLoaded(false));
      throw error;
    })
);

const setAuthStatus = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.login(data));
      dispatch(ActionCreator.setAuthStatus(AuthorizationStatus.AUTH));
    }).catch((e) => {
      dispatch(ActionCreator.setAuthStatus(AuthorizationStatus.NO_AUTH));
    })
);

const login = (userInput) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, userInput)
    .then(({data}) => {
      localStorage.token = data.token;
      dispatch(ActionCreator.login(data));
      dispatch(ActionCreator.setAuthStatus(AuthorizationStatus.AUTH));
    }).catch((e) => {
      dispatch(ActionCreator.setAuthStatus(AuthorizationStatus.NO_AUTH));
    })
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      dispatch(ActionCreator.logout());
      dispatch(ActionCreator.setAuthStatus(AuthorizationStatus.NO_AUTH));
    })
);

export { fetchOffers, setAuthStatus, login, logout };
