import { createReducer } from '@reduxjs/toolkit';

import { changeCity, changeFocusedAdId, changeSortingType } from '../action';
import { DEFAULT_CITY, DEFAULT_SORTING_TYPE } from '../../const';

const initialState = {
  activeCity: DEFAULT_CITY,
  adSortingType: DEFAULT_SORTING_TYPE,
  focusedAdId: null,
};

const ui = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(changeFocusedAdId, (state, action) => {
      state.focusedAdId = action.payload;
    })
    .addCase(changeSortingType, (state, action) => {
      state.adSortingType = action.payload;
    })
});

export { ui };
