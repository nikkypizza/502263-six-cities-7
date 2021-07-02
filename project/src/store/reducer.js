import {
  ActionType
} from './action';
import {
  AuthorizationStatus,
  DEFAULT_CITY,
  DEFAULT_SORTING_TYPE
} from '../const';

const initialState = {
  ads: [],
  activeCity: DEFAULT_CITY,
  adSortingType: DEFAULT_SORTING_TYPE,
  focusedAdId: null,
  adsAreLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {},
};


const reducer = (state = initialState, action) => {
  const {
    type,
    payload,
  } = action;

  switch (type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: payload,
      };

    case ActionType.CHANGE_FOCUSED_AD_ID:
      return {
        ...state,
        focusedAdId: payload,
      };

    case ActionType.CHANGE_SORTING_TYPE:
      return {
        ...state,
        adSortingType: payload,
      };

    case ActionType.LOAD_ADS:
      return {
        ...state,
        ads: payload,
      };

    case ActionType.ADS_ARE_LOADED:
      return {
        ...state,
        adsAreLoaded: payload,
      };

    case ActionType.SET_AUTH_STATUS:
      return {
        ...state,
        authorizationStatus: payload,
      };

    case ActionType.LOGIN:
      return {
        ...state,
        authInfo: payload,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        authInfo: {},
      };

    default:
      return state;
  }
};

export {
  reducer
};
