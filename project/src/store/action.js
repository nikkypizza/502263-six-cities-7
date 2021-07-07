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
};

const ActionCreator = {
  changeCity: (newCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: newCity,
  }),
  changeFocusedAdId: (newId) => ({
    type: ActionType.CHANGE_FOCUSED_AD_ID,
    payload: newId,
  }),
  changeSortingType: (newType) => ({
    type: ActionType.CHANGE_SORTING_TYPE,
    payload: newType,
  }),
  loadAds: (ads) => ({
    type: ActionType.LOAD_ADS,
    payload: ads,
  }),
  adsAreLoaded: (bool) => ({
    type: ActionType.ADS_ARE_LOADED,
    payload: bool,
  }),
  setAuthStatus: (bool) => ({
    type: ActionType.SET_AUTH_STATUS,
    payload: bool,
  }),
  login: (userData) => ({
    type: ActionType.LOGIN,
    payload: userData,
  }),
  logout: (userData) => ({
    type: ActionType.LOGOUT,
    payload: userData,
  }),
  loadAdDetails: (data) => ({
    type: ActionType.LOAD_AD_DETAILS,
    payload: data,
  }),
  fullAdInfoLoaded: (bool) => ({
    type: ActionType.FULL_AD_INFO_LOADED,
    payload: bool,
  }),
  loadFullAdInfo: (info) => ({
    type: ActionType.LOAD_FULL_AD_INFO,
    payload: info,
  }),
  loadAdComments: (comments) => ({
    type: ActionType.LOAD_AD_COMMENTS,
    payload: comments,
  }),
  loadAdsNearby: (ads) => ({
    type: ActionType.LOAD_ADS_NEARBY,
    payload: ads,
  }),
  redirectTo: (path) => ({
    type: ActionType.REDIRECT_TO,
    payload: path,
  }),
  setCommentIsPosted: (bool) => ({
    type: ActionType.SET_COMMENT_IS_POSTED,
    payload: bool,
  }),
};

export { ActionType, ActionCreator };
