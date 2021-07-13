import { createReducer } from '@reduxjs/toolkit';
import { adsAreLoaded, fullAdInfoLoaded, loadAdComments, loadAdDetails, loadAds, loadAdsNearby, loadFavouriteAds, loadFullAdInfo, setFavouriteAdsAreLoaded } from '../action';

const initialState = {
  ads: [],
  adsAreLoaded: false,
  fullAdInfoLoaded: false,
  fullAdInfo: {},
  adComments: [],
  adsNearby: [],
  favouriteAds: {},
  favouriteAdsAreLoaded: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAds, (state, action) => {
      state.ads = action.payload;
    })
    .addCase(adsAreLoaded, (state, action) => {
      state.adsAreLoaded = action.payload;
    })
    .addCase(loadAdDetails, (state, action) => {
      state.currentAdDetails = action.payload;
    })
    .addCase(fullAdInfoLoaded, (state, action) => {
      state.fullAdInfoLoaded = action.payload;
    })
    .addCase(loadFullAdInfo, (state, action) => {
      state.fullAdInfo = action.payload;
    })
    .addCase(loadAdComments, (state, action) => {
      state.adComments = action.payload;
    })
    .addCase(loadAdsNearby, (state, action) => {
      state.adsNearby = action.payload;
    })
    .addCase(loadFavouriteAds, (state, action) => {
      state.favouriteAds = action.payload;
    })
    .addCase(setFavouriteAdsAreLoaded, (state, action) => {
      state.favouriteAdsAreLoaded = action.payload;
    });
});

export { data };
