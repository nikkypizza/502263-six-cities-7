import { user } from './user';
import { ActionType } from '../action';

const initialState = {
  authorizationStatus: 'UNKNOWN',
  commentSendStatus: null,
  userInfo: {},
};

describe('Reducer: user', () => {

  it('without additional parameters should return initial state', () => {
    const state = {...initialState};
    expect(user(undefined, {})).toEqual(state);
  });

  it('should update "authorizationStatus" by a given value', () => {
    const state = {...initialState};
    const payload = 'AUTH';
    const setAuthAction = {type: ActionType.SET_AUTH_STATUS, payload};

    expect(user(state, setAuthAction)).toEqual({...state, authorizationStatus: payload});
  });

  it('should update "commentSendStatus" by a given value', () => {
    const state = {...initialState};
    const payload = 'pending';
    const setCommentSendStatusAction = {type: ActionType.SET_COMMENT_IS_DONE_SENDING, payload};

    expect(user(state, setCommentSendStatusAction)).toEqual({...state, commentSendStatus: payload});
  });

  it('should update "userInfo" by a given value', () => {
    const state = {...initialState};
    const payload = {id: 10, name: 'Oleg'};
    const userLoginAction = {type: ActionType.LOGIN, payload};

    expect(user(state, userLoginAction)).toEqual({...state, userInfo: payload});
  });

  it('should reset "userInfo" field', () => {
    const state = {...initialState, userInfo: {id: 10, name: 'Oleg'}};
    const userLogoutAction = {type: ActionType.LOGOUT};

    expect(user(state, userLogoutAction)).toEqual({...initialState});
  });

});
