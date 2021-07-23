import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import withPrivateRoute from './with-private-route';


const TEST_PATH = '/test-path';

describe('HOC: withPrivateRoute', () => {

  it('should render passed component if authorized', () => {
    const history = createMemoryHistory();
    const isAuth = true;
    const TestPagePrivate = withPrivateRoute(() => <>I am test</>, isAuth, TEST_PATH);

    const { getByText } = render(
      <Router history={history}>
        <TestPagePrivate/>
      </Router>,
    );

    const contentElement = getByText(/I am test/);
    expect(contentElement).toBeInTheDocument();
    expect(history.location.pathname).not.toBe(TEST_PATH);
  });

  it('should redirect to passed path if not authorized', () => {
    const history = createMemoryHistory();
    const isAuth = false;
    const TestPagePrivate = withPrivateRoute(() => <>I am test</>, isAuth, TEST_PATH);

    const { queryByText } = render(
      <Router history={history}>
        <TestPagePrivate/>
      </Router>,
    );


    const contentElement = queryByText(/I am test/);
    expect(contentElement).not.toBeInTheDocument();
    expect(history.location.pathname).toBe(TEST_PATH);
  });
});
