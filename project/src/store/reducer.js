import { ActionType } from './action';
import { DEFAULT_CITY, DEFAULT_SORTING_TYPE } from '../const';

const initialState = {
  ads: [],
  activeCity: DEFAULT_CITY,
  adSortingType: DEFAULT_SORTING_TYPE,
  focusedAdId: null,
  adsAreLoaded: false,
};


const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch(type) {
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

    default:
      return state;
  }
};

export {reducer};
