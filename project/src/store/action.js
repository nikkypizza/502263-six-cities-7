const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
};

const ActionCreator = {
  changeCity: (newCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: newCity,
  }),
};

export {ActionType, ActionCreator};
