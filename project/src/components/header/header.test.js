import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { AuthorizationStatus } from '../../const';

import Header from './header';


const mockStore = configureStore();

describe('Component: Header', () => {
  it('should render correctly', () => {
    const store = mockStore({USER: {authorizationStatus: AuthorizationStatus.NO_AUTH}});
    const history = createMemoryHistory();

    render (
      <Provider store={store}>
        <Router history={history}>
          <Header/>
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('page-header')).toBeInTheDocument();
  });
});
