import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import BookmarkButton from './bookmark-button';

const mockStore = configureStore();

describe('Component: BookmarkButton', () => {
  it('should render active button if isFavourite', () => {
    const store = mockStore({});
    const history = createMemoryHistory();

    render (
      <Provider store={store}>
        <Router history={history}>
          <BookmarkButton isFavourite adId={1}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('To bookmarks').closest('button')).toHaveClass('place-card__bookmark-button--active');
  });

  it('should not render active button if !isFavourite', () => {
    const store = mockStore({});
    const history = createMemoryHistory();

    render (
      <Provider store={store}>
        <Router history={history}>
          <BookmarkButton isFavourite={false} adId={1}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('To bookmarks').closest('button')).not.toHaveClass('place-card__bookmark-button--active');
  });
});
