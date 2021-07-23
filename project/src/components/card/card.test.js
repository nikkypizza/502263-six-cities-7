import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Card from './card';


const AD = {
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
  address: {lat: 52.369553943508,lng: 4.85309666406198},
  host: {name: 'Oleg',userPic: 'https://www.placecage.com/75/75',isPro: true},
};

const mockStore = configureStore();

describe('Component: Card', () => {
  it('should render correctly', () => {
    const store = mockStore({});
    const history = createMemoryHistory();

    render (
      <Provider store={store}>
        <Router history={history}>
          <Card data={AD} onMouseEnter={()=>{}} onMouseLeave={()=>{}} variant='mainPage'/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Wood and stone place')).toBeInTheDocument();
  });
});
