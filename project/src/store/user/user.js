import { createReducer } from '@reduxjs/toolkit';

import { login, setAuthStatus, setCommentSendStatus, logout } from '../action';
import { AuthorizationStatus, CommentSendStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  commentSendStatus: CommentSendStatus.DEFAULT,
  userInfo: {},
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setCommentSendStatus, (state, action) => {
      state.commentSendStatus = action.payload;
    })
    .addCase(logout, (state, action) => {
      state.userInfo = action.payload;
    });
});

export { user };
