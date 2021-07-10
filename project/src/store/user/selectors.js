import { NameSpace } from '../root-reducer';

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const getAuthInfo = (state) => state[NameSpace.USER].userInfo;
const getCommentIsPosted = (state) => state[NameSpace.USER].commentIsPosted;

export { getAuthorizationStatus, getAuthInfo, getCommentIsPosted };
