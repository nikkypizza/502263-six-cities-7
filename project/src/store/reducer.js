import { ActionType } from './action';
import { DEFAULT_CITY } from '../const';
import { OFFERS_DATA } from '../mocks/offers';

const initialState = {
  activeCity: DEFAULT_CITY,
  ads: OFFERS_DATA,
};


const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch(type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: payload,
      };

    default:
      return state;
  }
};

export {reducer};
