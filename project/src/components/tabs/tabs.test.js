import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { AuthorizationStatus, TABS_CITIES } from '../../const';

import Tabs from './tabs';


const mockStore = configureStore();

describe('Component: Tabs', () => {
  it('should render correctly', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      UI:  {adSortingType: null},
    });

    const history = createMemoryHistory();

    render (
      <Provider store={store}>
        <Router history={history}>
          <Tabs cities={TABS_CITIES}/>
        </Router>
      </Provider>,
    );

    expect(screen.queryAllByTestId('tabs-item')).toHaveLength(TABS_CITIES.length);
  });
});
