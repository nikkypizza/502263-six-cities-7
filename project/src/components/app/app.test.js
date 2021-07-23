import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { createApi } from '../../api/api';
import {AuthorizationStatus, AppRoute} from '../../const';

import App from './app';


const OFFER = {
  id: 3,
  city: 'Moscow',
  title: 'Place with a view in the heart of the city',
  descriptions: ['Nice, cozy, warm big bed house', 'This building is green and from 18th century.'],
  photos: {main: 'https://picsum.photos/260/203',all: ['https://picsum.photos/260/201']},
  price: 155,
  rating: 1.5,
  offerType: 'Flat',
  isPremium: true,
  isFavourite: true,
  bedroomsAmount: 2,
  capacity: 3,
  features: ['Towels', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge', 'Wi-Fi'],
  address: {lat: 52.3809553943508,lng: 4.939309666406198,zoom: 12},
  host: {name: 'Oleg Victorovich',userPic: 'https://stevensegallery.com/75/75',isPro: false},
};

const REVIEW = {
  id: 123,
  author: {name: 'Raul',userPic: 'https://stevensegallery.com/54/54'},
  rating: 3,
  date: '2010-01-11',
  review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
};

let history = null;
let store = null;
let fakeApp = null;
let api = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    api = createApi(() => {});

    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);
    store = createFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        commentSendStatus: null,
        userInfo: {},
      },
      DATA: {
        ads: [OFFER],
        adsAreLoaded: true,
        fullAdInfoLoaded: true,
        fullAdInfo: OFFER,
        adComments: [REVIEW],
        adsNearby: [OFFER],
        favouriteAds: [OFFER],
        favouriteAdsAreLoaded: true,
      },
      UI: {
        activeCity: 'Paris',
        adSortingType: null,
        focusedAdId: null,
        error: '',
        isCommentPostError: false,
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "MainPage" when user navigates to "/"', () => {
    history.push(AppRoute.ROOT);
    render(fakeApp);

    expect(screen.getByText('We could not find any property available at the moment in Paris')).toBeInTheDocument();
  });

  it('should render "OfferPage" when user navigates to "/offer"', () => {
    history.push(AppRoute.OFFER);
    render(fakeApp);

    expect(screen.getByText('Meet the host')).toBeInTheDocument();
    expect(screen.getByText('Nice, cozy, warm big bed house')).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigates to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('should render "FavouritesPage" when user navigates to "/favourites" while authorized', () => {
    history = createMemoryHistory();

    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);
    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      DATA: {favouriteAds: [],favouriteAdsAreLoaded: true}},
    );

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    history.push(AppRoute.FAVORITES);
    render(fakeApp);

    expect(screen.getByText(/Favorites/)).toBeInTheDocument();
    expect(screen.getByText(/Save properties to narrow down search or plan your future trips./)).toBeInTheDocument();
  });

  it('should render "ServerErrorPage" when user navigates to "/serverError"', () => {
    history.push(AppRoute.SERVER_ERROR);
    render(fakeApp);

    expect(screen.getByText(/We are currently experiencing technical difficulties with our application/)).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigates to "/404"', () => {
    history.push(AppRoute.NOT_FOUND);
    render(fakeApp);

    expect(screen.getByText(/Page not found/)).toBeInTheDocument();
    expect(screen.getByText('Go to main page')).toBeInTheDocument();
  });
});
