import { NameSpace } from '../root-reducer';

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const getAuthInfo = (state) => state[NameSpace.USER].userInfo;
const getCommentSendStatus = (state) => state[NameSpace.USER].commentSendStatus;

export { getAuthorizationStatus, getAuthInfo, getCommentSendStatus };
