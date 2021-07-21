import { data } from './data';
import { ActionType } from '../action';

const initialState = {
  ads: [],
  adsAreLoaded: false,
  fullAdInfoLoaded: false,
  fullAdInfo: {},
  adComments: [],
  adsNearby: [],
  favouriteAds: [],
  favouriteAdsAreLoaded: false,
};

describe('Reducer: data', () => {

  it('without additional parameters should return initial state', () => {
    const state = {...initialState};
    expect(data(undefined, {})).toEqual(state);
  });

  it('should update "ads" by a given value', () => {
    const state = {...initialState};
    const payload = [{id: 10, title: 'test'}, {id: 12, title: 'test2'}];
    const adsLoadAction = {type: ActionType.LOAD_ADS, payload};

    expect(data(state, adsLoadAction)).toEqual({...state, ads: payload});
  });

  it('should update "adsAreLoaded" by a given value', () => {
    const state = {...initialState};
    const payload = true;
    const adsAreLoadedAction = {type: ActionType.ADS_ARE_LOADED, payload};

    expect(data(state, adsAreLoadedAction)).toEqual({...state, adsAreLoaded: payload});
  });

  it('should update "fullAdInfoLoaded" by a given value', () => {
    const state = {...initialState};
    const payload = true;
    const fillAdInfoIsLoadedAction = {type: ActionType.FULL_AD_INFO_LOADED, payload};

    expect(data(state, fillAdInfoIsLoadedAction)).toEqual({...state, fullAdInfoLoaded: payload});
  });

  it('should update "fullAdInfo" by a given value', () => {
    const state = {...initialState};
    const payload = {id: 10, title: 'test'};
    const fullAdInfoLoadAction = {type: ActionType.LOAD_FULL_AD_INFO, payload};

    expect(data(state, fullAdInfoLoadAction)).toEqual({...state, fullAdInfo: payload});
  });

  it('should update "adComments" by a given value on commentsLoad action', () => {
    const state = {...initialState};
    const payload = [{id: 10, comment: 'test'}];
    const commentsLoadAction = {type: ActionType.LOAD_AD_COMMENTS, payload};

    expect(data(state, commentsLoadAction)).toEqual({...state, adComments: payload});
  });

  it('should update "adComments" by a given value on addComment action', () => {
    const state = {...initialState};
    const payload = [{id: 10, comment: 'test'}, {id: 11, comment: 'test2'}];

    const addCommentAction = {type: ActionType.ADD_USER_COMMENT, payload};

    expect(data(state, addCommentAction)).toEqual({...state, adComments: payload});
  });

  it('should update "adsNearby" by a given value', () => {
    const state = {...initialState};
    const payload = [{id: 10, title: 'test'}, {id: 11, title: 'test2'}];

    const loadAdsNearbyAction = {type: ActionType.LOAD_ADS_NEARBY, payload};

    expect(data(state, loadAdsNearbyAction)).toEqual({...state, adsNearby: payload});
  });

  it('should update "favouriteAds" by a given value', () => {
    const state = {...initialState};
    const payload = [{id: 10, title: 'test'}, {id: 11, title: 'test2'}];

    const loadFavouriteAdsAction = {type: ActionType.LOAD_FAVOURITE_ADS, payload};

    expect(data(state, loadFavouriteAdsAction)).toEqual({...state, favouriteAds: payload});
  });

  it('should update "favouriteAdsAreLoaded" by a given value', () => {
    const state = {...initialState};
    const payload = true;
    const favouriteAdsAreLoadedAction = {type: ActionType.FAVOURITE_ADS_ARE_LOADED, payload};

    expect(data(state, favouriteAdsAreLoadedAction)).toEqual({...state, favouriteAdsAreLoaded: payload});
  });

  it('should toggle "isFavourite" flag on corresponding state fields and remove ad item from "favouriteAds" on id match', () => {
    const InitialState = {
      fullIdMatch: {
        ...initialState,
        fullAdInfo: {id: 20, isFavourite: false},
        ads: [{id: 20, isFavourite: false}, {id: 10, isFavourite: false}],
        adsNearby: [{id: 20, isFavourite: false}, {id: 10, isFavourite: false}],
        favouriteAds: [{id: 20, isFavourite: false}, {id: 10, isFavourite: false}],
      },
      partialIdMatch: {
        ...initialState,
        fullAdInfo: {id: 10, isFavourite: false},
        ads: [{id: 20, isFavourite: false}, {id: 10, isFavourite: false}],
        adsNearby: [{id: 20, isFavourite: false}, {id: 10, isFavourite: false}],
        favouriteAds: [{id: 10, isFavourite: false}, {id: 5, isFavourite: false}],
      },
    };

    const ExpectedState = {
      fullIdMatch: {
        ...initialState,
        fullAdInfo: {id: 20, isFavourite: true},
        ads: [{id: 20, isFavourite: true}, {id: 10, isFavourite: false}],
        adsNearby: [{id: 20, isFavourite: true}, {id: 10, isFavourite: false}],
        favouriteAds: [{id: 10, isFavourite: false}],
      },
      partialIdMatch: {
        ...initialState,
        fullAdInfo: {id: 10, isFavourite: false},
        ads: [{id: 20, isFavourite: true}, {id: 10, isFavourite: false}],
        adsNearby: [{id: 20, isFavourite: true}, {id: 10, isFavourite: false}],
        favouriteAds: [{id: 10, isFavourite: false}, {id: 5, isFavourite: false}],
      },
    };

    const setIsFavouriteIdMatchAction = {type: ActionType.SET_IS_FAVOURITE, payload: {hotelId: 20, isFavourite: true}};
    const setIsFavouriteNoIdMatchAction = {type: ActionType.SET_IS_FAVOURITE, payload: {hotelId: 77, isFavourite: true}};

    expect(data(InitialState.fullIdMatch, setIsFavouriteIdMatchAction)).toEqual(ExpectedState.fullIdMatch);
    expect(data(InitialState.partialIdMatch, setIsFavouriteIdMatchAction)).toEqual(ExpectedState.partialIdMatch);
    expect(data(InitialState.fullIdMatch, setIsFavouriteNoIdMatchAction)).toEqual(InitialState.fullIdMatch);
  });
});
