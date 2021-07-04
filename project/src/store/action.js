const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_FOCUSED_AD_ID: 'CHANGE_FOCUSED_AD_ID',
  CHANGE_SORTING_TYPE: 'CHANGE_SORTING_TYPE',
  LOAD_ADS: 'LOAD_ADS',
  ADS_ARE_LOADED: 'ADS_ARE_LOADED',
  SET_AUTH_STATUS: 'SET_AUTH_STATUS',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
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
};

export {ActionType, ActionCreator};
