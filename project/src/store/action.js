import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  CHANGE_CITY: 'ui/changeCity',
  CHANGE_FOCUSED_AD_ID: 'ui/changeFocusedAdId',
  CHANGE_SORTING_TYPE: 'ui/changeSortingType',
  REDIRECT_TO: 'ui/redirectTo',
  SET_ERROR: 'ui/setError',
  SET_COMMENT_POST_ERROR: 'ui/setCommentPostError',

  LOAD_ADS: 'data/loadAds',
  LOAD_AD_DETAILS: 'data/loadAdDetails',
  LOAD_FULL_AD_INFO: 'data/loadFullAdInfo',
  LOAD_AD_COMMENTS: 'data/loadAdComments',
  LOAD_ADS_NEARBY: 'data/loadAdsNearby',
  LOAD_FAVOURITE_ADS: 'data/loadFavouriteAds',
  ADD_USER_COMMENT: 'data/addComment',
  ADS_ARE_LOADED: 'data/adsAreLoaded',
  FULL_AD_INFO_LOADED: 'data/isFullAdInfoLoaded',
  FAVOURITE_ADS_ARE_LOADED: 'data/favouriteAdsAreLoaded',

  SET_AUTH_STATUS: 'user/setAuthStatus',
  SET_COMMENT_IS_DONE_SENDING: 'user/setCommentSendStatus',
  SET_IS_FAVOURITE: 'user/setIsFavourite',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
};

// UI
const changeCity = createAction(ActionType.CHANGE_CITY, (newCity) => ({payload: newCity}));
const changeFocusedAdId = createAction(ActionType.CHANGE_FOCUSED_AD_ID, (newId) => ({payload: newId}));
const changeSortingType = createAction(ActionType.CHANGE_SORTING_TYPE, (newType) => ({payload: newType}));
const redirectTo = createAction(ActionType.REDIRECT_TO, (path) => ({payload: path}));
const setError = createAction(ActionType.SET_ERROR, (error) => ({payload: error}));
const setCommentPostError = createAction(ActionType.SET_COMMENT_POST_ERROR, (bool) => ({payload: bool}));


// DATA
const loadAds = createAction(ActionType.LOAD_ADS, (ads) => ({payload: ads}));
const adsAreLoaded = createAction(ActionType.ADS_ARE_LOADED, (bool) => ({payload: bool}));
const loadAdDetails = createAction(ActionType.LOAD_AD_DETAILS, (data) => ({payload: data}));
const loadFullAdInfo = createAction(ActionType.LOAD_FULL_AD_INFO, (info) => ({payload: info}));
const fullAdInfoLoaded = createAction(ActionType.FULL_AD_INFO_LOADED, (bool) => ({payload: bool}));
const loadAdComments = createAction(ActionType.LOAD_AD_COMMENTS, (comments) => ({payload: comments}));
const loadAdsNearby = createAction(ActionType.LOAD_ADS_NEARBY, (ads) => ({payload: ads}));
const loadFavouriteAds = createAction(ActionType.LOAD_FAVOURITE_ADS, (ads) => ({payload: ads}));
const setFavouriteAdsAreLoaded = createAction(ActionType.FAVOURITE_ADS_ARE_LOADED, (ads) => ({payload: ads}));
const addComment = createAction(ActionType.ADD_USER_COMMENT, (newComments) => ({payload: newComments}));


// USER
const login = createAction(ActionType.LOGIN, (userData) => ({payload: userData}));
const logout = createAction(ActionType.LOGOUT, (userData) => ({payload: userData}));
const setAuthStatus = createAction(ActionType.SET_AUTH_STATUS, (bool) => ({payload: bool}));
const setCommentSendStatus = createAction(ActionType.SET_COMMENT_IS_DONE_SENDING, (bool) => ({payload: bool}));
const setIsFavourite = createAction(ActionType.SET_IS_FAVOURITE, (hotelId, isFavourite) => ({payload: {hotelId, isFavourite}}));


export {
  ActionType,
  changeCity,
  changeFocusedAdId,
  changeSortingType,
  loadAds,
  adsAreLoaded,
  setAuthStatus,
  login,
  logout,
  loadAdDetails,
  fullAdInfoLoaded,
  loadFullAdInfo,
  loadAdComments,
  loadFavouriteAds,
  loadAdsNearby,
  redirectTo,
  setCommentSendStatus,
  setIsFavourite,
  setFavouriteAdsAreLoaded,
  addComment,
  setError,
  setCommentPostError
};
