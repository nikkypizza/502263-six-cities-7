import { createReducer } from '@reduxjs/toolkit';

import { login, setAuthStatus, setCommentIsPosted, logout } from '../action';
import { AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userInfo: {},
  commentIsPosted: true,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setCommentIsPosted, (state, action) => {
      state.commentIsPosted = action.payload;
    })
    .addCase(logout, (state, action) => {
      state.userInfo = action.payload;
    });
});

export { user };
