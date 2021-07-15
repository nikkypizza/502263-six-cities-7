import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_FOCUSED_AD_ID: 'CHANGE_FOCUSED_AD_ID',
  CHANGE_SORTING_TYPE: 'CHANGE_SORTING_TYPE',
  LOAD_ADS: 'LOAD_ADS',
  ADS_ARE_LOADED: 'ADS_ARE_LOADED',
  SET_AUTH_STATUS: 'SET_AUTH_STATUS',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOAD_AD_DETAILS: 'LOAD_AD_DETAILS',
  FULL_AD_INFO_LOADED: 'FULL_AD_INFO_LOADED',
  LOAD_FULL_AD_INFO: 'LOAD_FULL_AD_INFO',
  LOAD_AD_COMMENTS: 'LOAD_AD_COMMENTS',
  LOAD_ADS_NEARBY: 'LOAD_ADS_NEARBY',
  REDIRECT_TO: 'REDIRECT_TO',
  POST_COMMENT: 'POST_COMMENT',
  SET_COMMENT_IS_POSTED: 'SET_COMMENT_IS_POSTED',
  SET_IS_FAVOURITE: 'SET_IS_FAVOURITE',
  LOAD_FAVOURITE_ADS: 'LOAD_FAVOURITE_ADS',
  FAVOURITE_ADS_ARE_LOADED: 'FAVOURITE_ADS_ARE_LOADED',
};

// UI
const changeCity = createAction(ActionType.CHANGE_CITY, (newCity) => ({payload: newCity}));
const changeFocusedAdId = createAction(ActionType.CHANGE_FOCUSED_AD_ID, (newId) => ({payload: newId}));
const changeSortingType = createAction(ActionType.CHANGE_SORTING_TYPE, (newType) => ({payload: newType}));


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


// USER
const login = createAction(ActionType.LOGIN, (userData) => ({payload: userData}));
const logout = createAction(ActionType.LOGOUT, (userData) => ({payload: userData}));
const setAuthStatus = createAction(ActionType.SET_AUTH_STATUS, (bool) => ({payload: bool}));
const setCommentIsPosted = createAction(ActionType.SET_COMMENT_IS_POSTED, (bool) => ({payload: bool}));
const setIsFavourite = createAction(ActionType.SET_IS_FAVOURITE, (hotelId, isFavourite) => ({payload: {hotelId, isFavourite}}));

const redirectTo = createAction(ActionType.REDIRECT_TO, (path) => ({payload: path}));

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
  setCommentIsPosted,
  setIsFavourite,
  setFavouriteAdsAreLoaded
};
