import { ActionType, changeCity, changeFocusedAdId, changeSortingType, loadAds, adsAreLoaded, setAuthStatus, login, logout, fullAdInfoLoaded, loadFullAdInfo, loadAdComments, loadFavouriteAds, loadAdsNearby, redirectTo, setCommentSendStatus, setIsFavourite, setFavouriteAdsAreLoaded, addComment, setError, setIsCommentPostError } from './action';

describe('Actions', () => {

  describe('/user', () => {
    it('setAuthStatus: returns correct action', () => {
      const payload = 'AUTH';
      const expectedAction = {type: ActionType.SET_AUTH_STATUS, payload};

      expect(setAuthStatus(payload)).toEqual(expectedAction);
    });

    it('login: returns correct action', () => {
      const payload = {id: 10, name: 'test'};
      const expectedAction = {type: ActionType.LOGIN, payload};

      expect(login(payload)).toEqual(expectedAction);
    });

    it('logout: returns correct action', () => {
      const expectedAction = {type: ActionType.LOGOUT};

      expect(logout()).toEqual(expectedAction);
    });

    it('setCommentSendStatus: returns correct action', () => {
      const payload = false;
      const expectedAction = {type: ActionType.SET_COMMENT_IS_DONE_SENDING, payload};

      expect(setCommentSendStatus(payload)).toEqual(expectedAction);
    });

    it('setIsFavourite: returns correct action', () => {
      const hotelId = 7;
      const isFavourite = true;
      const payload = {hotelId, isFavourite};
      const expectedAction = {type: ActionType.SET_IS_FAVOURITE, payload};

      expect(setIsFavourite(hotelId, isFavourite)).toEqual(expectedAction);
    });
  });


  describe('/ui', () => {
    it('changeCity: returns correct action', () => {
      const payload = 'Amsterdam';
      const expectedAction = {type: ActionType.CHANGE_CITY, payload};

      expect(changeCity(payload)).toEqual(expectedAction);
    });

    it('changeFocusedAdId: returns correct action', () => {
      const payload = 100;
      const expectedAction = {type: ActionType.CHANGE_FOCUSED_AD_ID, payload};

      expect(changeFocusedAdId(payload)).toEqual(expectedAction);
    });

    it('changeSortingType: returns correct action', () => {
      const payload = 'priceAscending';
      const expectedAction = {type: ActionType.CHANGE_SORTING_TYPE, payload};

      expect(changeSortingType(payload)).toEqual(expectedAction);
    });

    it('redirectTo: returns correct action', () => {
      const payload = '/';
      const expectedAction = {type: ActionType.REDIRECT_TO, payload};

      expect(redirectTo(payload)).toEqual(expectedAction);
    });

    it('setIsCommentPostError: returns correct action', () => {
      const payload = true;
      const expectedAction = {type: ActionType.SET_COMMENT_POST_ERROR, payload};

      expect(setIsCommentPostError(payload)).toEqual(expectedAction);
    });

    it('setError: returns correct action', () => {
      const payload = 'Oh no! 404!';
      const expectedAction = {type: ActionType.SET_ERROR, payload};

      expect(setError(payload)).toEqual(expectedAction);
    });
  });


  describe('/data', () => {
    it('loadAds: returns correct action', () => {
      const payload = [{title: 'hello'},{title: 'yello'}];
      const expectedAction = {type: ActionType.LOAD_ADS, payload};

      expect(loadAds(payload)).toEqual(expectedAction);
    });

    it('loadFavouriteAds: returns correct action', () => {
      const payload = [{title: 'hello'},{title: 'yello'}];
      const expectedAction = {type: ActionType.LOAD_FAVOURITE_ADS, payload};

      expect(loadFavouriteAds(payload)).toEqual(expectedAction);
    });

    it('loadAdsNearby: returns correct action', () => {
      const payload = [{title: 'hello'},{title: 'yello'}];
      const expectedAction = {type: ActionType.LOAD_ADS_NEARBY, payload};

      expect(loadAdsNearby(payload)).toEqual(expectedAction);
    });

    it('adsAreLoaded: returns correct action', () => {
      const payload = true;
      const expectedAction = {type: ActionType.ADS_ARE_LOADED, payload};

      expect(adsAreLoaded(payload)).toEqual(expectedAction);
    });

    it('setFavouriteAdsAreLoaded: returns correct action', () => {
      const payload = true;
      const expectedAction = {type: ActionType.FAVOURITE_ADS_ARE_LOADED, payload};

      expect(setFavouriteAdsAreLoaded(payload)).toEqual(expectedAction);
    });

    it('fullAdInfoLoaded: returns correct action', () => {
      const payload = false;
      const expectedAction = {type: ActionType.FULL_AD_INFO_LOADED, payload};

      expect(fullAdInfoLoaded(payload)).toEqual(expectedAction);
    });

    it('loadFullAdInfo: returns correct action', () => {
      const payload = {id: 10, name: 'test'};
      const expectedAction = {type: ActionType.LOAD_FULL_AD_INFO, payload};

      expect(loadFullAdInfo(payload)).toEqual(expectedAction);
    });

    it('loadAdComments: returns correct action', () => {
      const payload = [{text: 'this is nice!', author: 'Oleg'}, {text: 'this is bad!', author: 'Maria'}];
      const expectedAction = {type: ActionType.LOAD_AD_COMMENTS, payload};

      expect(loadAdComments(payload)).toEqual(expectedAction);
    });

    it('addComment: returns correct action', () => {
      const payload = [{text: 'this is nice!', author: 'Oleg'}, {text: 'this is bad!', author: 'Maria'}];
      const expectedAction = {type: ActionType.ADD_USER_COMMENT, payload};

      expect(addComment(payload)).toEqual(expectedAction);
    });
  });

});
