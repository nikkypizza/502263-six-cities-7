import { ActionType } from './action';
import { DEFAULT_CITY, DEFAULT_SORTING_TYPE } from '../const';
import { OFFERS_DATA } from '../mocks/offers';

const initialState = {
  ads: OFFERS_DATA,
  activeCity: DEFAULT_CITY,
  adSortingType: DEFAULT_SORTING_TYPE,
  focusedAdId: null,
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

    default:
      return state;
  }
};

export {reducer};
