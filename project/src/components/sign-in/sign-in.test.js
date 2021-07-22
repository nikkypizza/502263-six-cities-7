import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { AppRoute, AuthorizationStatus } from '../../const';

import SignIn from './sign-in';


const mockStore = configureStore();

describe('Component: SignIn', () => {
  it('should render link to /login if not signed in', () => {
    const store = mockStore({USER: {authorizationStatus: AuthorizationStatus.NO_AUTH}});
    const history = createMemoryHistory();

    render (
      <Provider store={store}>
        <Router history={history}>
          <SignIn/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.getByText('Sign in').closest('a')).toHaveAttribute('href', AppRoute.LOGIN);

    expect(screen.queryByText('Sign out')).not.toBeInTheDocument();
  });

  it('should render username link to /favourites if signed in', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo: {email: 'test@test.ru'},
      }});
    const history = createMemoryHistory();

    render (
      <Provider store={store}>
        <Router history={history}>
          <SignIn/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('test@test.ru')).toBeInTheDocument();
    expect(screen.getByText('test@test.ru').closest('a')).toHaveAttribute('href', AppRoute.FAVORITES);

    expect(screen.queryByText('Sign in')).not.toBeInTheDocument();
  });

  it('should render "Sign out" link to ROOT if signed in', () => {
    const store = mockStore({USER: {authorizationStatus: AuthorizationStatus.AUTH}});
    const history = createMemoryHistory();

    render (
      <Provider store={store}>
        <Router history={history}>
          <SignIn/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Sign out')).toBeInTheDocument();
    expect(screen.getByText('Sign out').closest('a')).toHaveAttribute('href', AppRoute.ROOT);

    expect(screen.queryByText('Sign in')).not.toBeInTheDocument();
  });
});
