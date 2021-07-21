import { ui } from './ui';
import { ActionType } from '../action';

const initialState = {
  activeCity: 'Paris',
  adSortingType: null,
  focusedAdId: null,
  error: '',
  isCommentPostError: false,
};

describe('Reducer: ui', () => {

  it('without additional parameters should return initial state', () => {
    const state = {...initialState};
    expect(ui(undefined, {})).toEqual(state);
  });

  it('should update "activeCity" by a given value', () => {
    const state = {...initialState};
    const payload = 'Rome';
    const changeCityAction = {type: ActionType.CHANGE_CITY, payload};

    expect(ui(state, changeCityAction)).toEqual({...state, activeCity: payload});
  });

  it('should update "focusedAdId" by a given value', () => {
    const state = {...initialState};
    const payload = 15;
    const changeFocusedAdIdAction = {type: ActionType.CHANGE_FOCUSED_AD_ID, payload};

    expect(ui(state, changeFocusedAdIdAction)).toEqual({...state, focusedAdId: payload});
  });

  it('should update "error" by a given value', () => {
    const state = {...initialState};
    const payload = 'Oops, smth went wrong!';
    const setErrorAction = {type: ActionType.SET_ERROR, payload};

    expect(ui(state, setErrorAction)).toEqual({...state, error: payload});
  });

  it('should update "isCommentPostError" by a given value', () => {
    const state = {...initialState};
    const payload = true;
    const setCommentPostErrorAction = {type: ActionType.SET_COMMENT_POST_ERROR, payload};

    expect(ui(state, setCommentPostErrorAction)).toEqual({...state, isCommentPostError: payload});
  });

  it('should update "adSortingType" by a given value', () => {
    const state = {...initialState};
    const payload = 'priceDecending';
    const setAdSortingTypeAction = {type: ActionType.CHANGE_SORTING_TYPE, payload};

    expect(ui(state, setAdSortingTypeAction)).toEqual({...state, adSortingType: payload});
  });

});
