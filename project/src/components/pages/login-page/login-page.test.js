import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import { AuthorizationStatus } from '../../../const';

import LoginPage from './login-page';


const mockStore = configureStore();

describe('Component: LoginPage', () => {
  it('should render correctly', () => {
    const store = mockStore({USER: {authorizationStatus: AuthorizationStatus.NO_AUTH}});
    const history = createMemoryHistory();

    render (
      <Provider store={store}>
        <Router history={history}>
          <LoginPage/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('should have working inputs', () => {
    const store = mockStore({USER: {authorizationStatus: AuthorizationStatus.NO_AUTH}});
    const history = createMemoryHistory();

    render (
      <Provider store={store}>
        <Router history={history}>
          <LoginPage/>
        </Router>
      </Provider>,
    );

    const emailInput = screen.getByTestId('login-email-input');
    const passwordInput = screen.getByTestId('login-password-input');

    userEvent.type(emailInput, 'test');
    userEvent.type(passwordInput, '123456');

    expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();

  });

  it('should not allow space chars in password input', () => {
    const store = mockStore({USER: {authorizationStatus: AuthorizationStatus.NO_AUTH}});
    const history = createMemoryHistory();

    render (
      <Provider store={store}>
        <Router history={history}>
          <LoginPage/>
        </Router>
      </Provider>,
    );

    const passwordInput = screen.getByTestId('login-password-input');

    userEvent.type(passwordInput, '        1       ');
    expect(passwordInput.value).toEqual('1');
  });

  it('should acccept only valid email', () => {
    const store = mockStore({USER: {authorizationStatus: AuthorizationStatus.NO_AUTH}});
    const history = createMemoryHistory();

    render (
      <Provider store={store}>
        <Router history={history}>
          <LoginPage/>
        </Router>
      </Provider>,
    );

    const emailInput = screen.getByTestId('login-email-input');
    userEvent.type(emailInput, 'test@me');
    expect(emailInput.checkValidity()).toEqual(false);

    emailInput.value = '';
    userEvent.type(emailInput, 'test@me.');
    expect(emailInput.checkValidity()).toEqual(false);

    emailInput.value = '';
    userEvent.type(emailInput, 'test@me.ru');
    expect(emailInput.checkValidity()).toEqual(true);
  });
});
