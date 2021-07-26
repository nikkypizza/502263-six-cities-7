import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { AuthorizationStatus } from '../../const';

import SortForm from './sort-form';


const mockStore = configureStore();

describe('Component: SortForm', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      UI:  {adSortingType: null},
    });


    render (
      <Provider store={store}>
        <Router history={history}>
          <SortForm/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Sort by')).toBeInTheDocument();
  });
});
