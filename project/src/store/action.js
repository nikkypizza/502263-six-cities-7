const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_FOCUSED_AD_ID: 'CHANGE_FOCUSED_AD_ID',
  CHANGE_SORTING_TYPE: 'CHANGE_SORTING_TYPE',
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
};

export {ActionType, ActionCreator};
