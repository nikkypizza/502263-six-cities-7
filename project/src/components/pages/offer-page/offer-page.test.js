import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import * as Redux from 'react-redux';

import { AuthorizationStatus } from '../../../const';

import OfferPage from './offer-page';

const ADS = [{
  id: 1,
  city: 'Paris',
  title: 'Wood and stone place',
  descriptions: ['This building is green and from 18th century.'],
  photos: {
    main: 'https://picsum.photos/260/199',
    all: ['https://picsum.photos/260/201','https://picsum.photos/260/202','https://picsum.photos/260/203','https://picsum.photos/260/204'],
  },
  price: 220,
  rating: 2.1,
  offerType: 'Single Room',
  isPremium: false,
  isFavourite: true,
  bedroomsAmount: 1,
  capacity: 9,
  features: ['Towels'],
  address: {lat: 52.369553943508,lng: 4.85309666406198,zoom: 12},
  host: {name: 'Oleg',userPic: 'https://www.placecage.com/75/75',isPro: true},
},
{
  id: 2,
  city: 'Paris',
  title: 'Nice, cozy, warm big bed house',
  descriptions: ['You will love it !'],
  photos: {
    main: 'https://picsum.photos/260/198',
    all: ['https://picsum.photos/260/201','https://picsum.photos/260/202'],
  },
  price: 400,
  rating: 4.7,
  offerType: 'House',
  isPremium: false,
  isFavourite: true,
  bedroomsAmount: 6,
  capacity: 13,
  features: ['Washing machine', 'Towels', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge', 'Wi-Fi'],
  address: {lat: 52.3909553943508,lng: 4.929309666406198,zoom: 12},
  host: {name: 'Paul',userPic: 'https://www.placecage.com/75/75',isPro: true},
},
];

const REVIEWS = [{
  id: 123,
  author: {name: 'Raul',userPic: 'https://stevensegallery.com/54/54'},
  rating: 3,
  date: '2010-01-11',
  review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
},
{
  id: 321,
  author: {name: 'Omar',userPic: 'https://www.placecage.com/54/54'},
  rating: 1,
  date: '1998-09-01',
  review: 'ATROCIOUS!',
}];


const mockStore = configureStore();

describe('Component: OfferPage', () => {
  it('should render correctly', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      DATA:  {fullAdInfo: ADS[0], fullAdInfoLoaded: true, adsNearby: ADS, adComments: REVIEWS},
      UI:  {isCommentPostError: false},
    });

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    const history = createMemoryHistory();

    render (
      <Provider store={store}>
        <Router history={history}>
          <OfferPage adId='50'/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/ATROCIOUS/)).toBeInTheDocument();
    expect(screen.getByText(/Nice, cozy, warm big bed house/)).toBeInTheDocument();
    expect(screen.getByText(/Raul/)).toBeInTheDocument();
  });

  it('should render error notification on error', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      DATA:  {fullAdInfo: ADS[0], fullAdInfoLoaded: true, adsNearby: ADS, adComments: REVIEWS},
      UI:  {isCommentPostError: true, error: 'I am error'},
    });

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    const history = createMemoryHistory();

    render (
      <Provider store={store}>
        <Router history={history}>
          <OfferPage adId='50'/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/I am error/)).toBeInTheDocument();
  });
});
