import MockAdapter from 'axios-mock-adapter';

import { createApi } from './api';
import { ActionType } from '../store/action';
import { APIRoute, AppRoute, AuthorizationStatus} from '../const';
import { fetchAdComments, fetchAdsNearby, fetchFavouriteAds, fetchFullAdInfo, fetchOffers, postComment, setAuthStatus, setIsFavouriteAd, login, logout } from './api-actions';
import adaptAdFormat from '../adapters/ads';
import adaptCommentFormat from '../adapters/comments';
import { getIsFavouriteStatusCode } from '../util';

const offer = {
  bedrooms: 3,
  city: {location: {latitude: 52.370216,longitude: 4.895168,zoom: 10},name: 'Amsterdam'},
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating','Kitchen','Cable TV','Washing machine','Coffee machine','Dishwasher'],
  host: {'avatar_url': 'img/1.png',id: 3,'is_pro': true,name: 'Angelina'},
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  'is_favorite': false,
  'is_premium': false,
  location: {latitude: 52.35514938496378,longitude: 4.673877537499948,zoom: 8},
  'max_adults': 4,
  'preview_image': 'img/1.png',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
};

const comment = {
  comment:'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: 4,
  user: {'avatar_url': 'img/1.png',id: 4,'is_pro': false,name: 'Max'},
};


let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createApi(() => {});
  });

  describe('GET/LOGIN:', () => {

    it('should make a correct API call', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const checkAuthLoader = setAuthStatus();

      apiMock.onGet(APIRoute.LOGIN).reply(200, [{fake: true}]);

      return checkAuthLoader(dispatch, () => {}, api).then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGIN,
          payload: [{fake: true}],
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_AUTH_STATUS,
          payload: AuthorizationStatus.AUTH,
        });
      });
    });

    it('should redirect to server error page on server error', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const checkAuthLoader = setAuthStatus();

      apiMock.onGet(APIRoute.LOGIN).reply(500, [{fake: true}]);

      return checkAuthLoader(dispatch, () => {}, api).then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.REDIRECT_TO,
          payload: AppRoute.SERVER_ERROR,
        });
      });
    });
  });

  describe('POST/LOGIN:', ()=>{
    it('should make a correct API call', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const fakeUser = {email: 'test@test.ru', password: '123456'};
      const loginLoader = login(fakeUser);

      apiMock.onPost(APIRoute.LOGIN).reply(200, [{fake: true}]);

      return loginLoader(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);

          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOGIN,
            payload: [{fake: true}],
          });

          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: ActionType.SET_AUTH_STATUS,
            payload: AuthorizationStatus.AUTH,
          });
        });
    });

    it('should add token to localstorage', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const fakeUser = {email: 'test@test.ru', password: '123456'};
      const loginLoader = login(fakeUser);

      apiMock.onPost(APIRoute.LOGIN).reply(200, [{fake: true}]);
      Storage.prototype.setItem = jest.fn();

      return loginLoader(dispatch, () => {}, api)
        .then((token) => {
          expect(Storage.prototype.setItem).toBeCalled();
          expect(Storage.prototype.setItem).toBeCalledWith('token', token);
        });
    });
  });

  describe('POST/LOGOUT:', ()=>{
    it('should make a correct API call', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const logoutLoader = logout();

      apiMock.onDelete(APIRoute.LOGOUT).reply(204, [{fake: true}]);

      return logoutLoader(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);

          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOGOUT,
          });

          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: ActionType.SET_AUTH_STATUS,
            payload: AuthorizationStatus.NO_AUTH,
          });
        });
    });

    it('should remove token to localstorage', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const logoutLoader = logout();

      apiMock.onDelete(APIRoute.LOGOUT).reply(204, [{fake: true}]);

      Storage.prototype.removeItem = jest.fn();

      return logoutLoader(dispatch, () => {}, api)
        .then(() => {
          expect(Storage.prototype.removeItem).toBeCalled();
          expect(Storage.prototype.removeItem).toBeCalledWith('token');
        });
    });
  });

  describe('GET/ADS:', () => {
    it('should make a correct API call', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const offersLoader = fetchOffers();

      apiMock.onGet(APIRoute.ADS).reply(200, [offer]);

      return offersLoader(dispatch, () => {}, api).then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_ADS,
          payload: [adaptAdFormat(offer)],
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.ADS_ARE_LOADED,
          payload: true,
        });
      });
    });
  });

  describe('GET/HOTELS_NEARBY:', ()=>{
    it('should make a correct API call', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const nearbyOffersLoader = fetchAdsNearby(1);

      apiMock.onGet(`${APIRoute.ADS}/1${APIRoute.ADS_NEARBY}`).reply(200, [offer]);

      return nearbyOffersLoader(dispatch, () => {}, api).then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_ADS_NEARBY,
          payload: [adaptAdFormat(offer)],
        });
      });
    });
  });

  describe('GET/FULL_AD_INFO:', ()=> {
    it('should make a correct API call', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const adInfoLoader = fetchFullAdInfo(1);

      apiMock.onGet(`${APIRoute.ADS}/1`).reply(200, offer);

      return adInfoLoader(dispatch, () => {}, api).then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1,{
          type: ActionType.LOAD_FULL_AD_INFO,
          payload: adaptAdFormat(offer),
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.FULL_AD_INFO_LOADED,
          payload: true,
        });
      });
    });
  });

  describe('GET/AD_COMMENTS:', ()=>{
    it('should make a correct API call', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const adCommentsLoader = fetchAdComments(1);

      apiMock.onGet(`${APIRoute.COMMENTS}/1`).reply(200, [comment]);

      return adCommentsLoader(dispatch, () => {}, api).then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_AD_COMMENTS,
          payload: [adaptCommentFormat(comment)],
        });
      });
    });
  });

  describe('GET/FAVOURITE_ADS:', ()=>{
    it('should make a correct API call', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const favouriteAdsLoader = fetchFavouriteAds();

      apiMock.onGet(APIRoute.FAVOURITE).reply(200, [offer]);

      return favouriteAdsLoader(dispatch, () => {}, api).then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVOURITE_ADS,
          payload: [adaptAdFormat(offer)],
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.FAVOURITE_ADS_ARE_LOADED,
          payload: true,
        });
      });
    });
  });

  describe('POST/FAVOURITE_AD:', ()=> {

    it('should make a correct API call', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const favouriteAdPoster = setIsFavouriteAd(1, true);

      apiMock.onPost(`${APIRoute.FAVOURITE}/1/${getIsFavouriteStatusCode(true)}`).reply(200, [offer]);

      return favouriteAdPoster(dispatch, () => {}, api).then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.SET_IS_FAVOURITE,
          payload: { hotelId: 1, isFavourite: true},
        });
      });
    });

    it('should redirect to login on unauthorized', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const favouriteAdPoster = setIsFavouriteAd(1, true);

      apiMock.onPost(`${APIRoute.FAVOURITE}/1/${getIsFavouriteStatusCode(true)}`).reply(401, [offer]);

      return favouriteAdPoster(dispatch, () => {}, api).then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.REDIRECT_TO,
          payload: AppRoute.LOGIN,
        });
      });
    });
  });

  describe('POST/COMMENT:', () =>{
    it('should make a correct API call', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const commentPoster = postComment('hello world', 1);

      apiMock.onPost(`${APIRoute.COMMENTS}/1`).reply(200, [comment]);

      return commentPoster(dispatch, () => {}, api).then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.ADD_USER_COMMENT,
          payload: [adaptCommentFormat(comment)],
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_COMMENT_IS_DONE_SENDING,
          payload: 'ok',
        });
      });
    });

    it('should dispatch error on error', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const commentPoster = postComment('hello world', 1);

      apiMock.onPost(`${APIRoute.COMMENTS}/1`).reply(404, [comment]);

      return commentPoster(dispatch, () => {}, api).then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ERROR,
          payload: 'Request failed with status code 404',
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_COMMENT_POST_ERROR,
          payload: true,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_COMMENT_IS_DONE_SENDING,
          payload: null,
        });
      });
    });
  });
});
