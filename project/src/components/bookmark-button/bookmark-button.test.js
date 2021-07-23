import React from 'react';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import * as Redux from 'react-redux';

import BookmarkButton from './bookmark-button';

const mockStore = configureStore({});
let store;

describe('Component: BookmarkButton', () => {
  beforeAll(() => {
    store = mockStore({});
  });

  it('should render active button if isFavourite', () => {
    render (
      <Provider store={store}>
        <BookmarkButton isFavourite adId={1}/>
      </Provider>,
    );

    expect(screen.getByText('To bookmarks').closest('button')).toHaveClass('place-card__bookmark-button--active');
  });

  it('should not render active button if !isFavourite', () => {
    render (
      <Provider store={store}>
        <BookmarkButton isFavourite={false} adId={1}/>
      </Provider>,
    );

    expect(screen.getByText('To bookmarks').closest('button')).not.toHaveClass('place-card__bookmark-button--active');
  });

  it('should use dispatch on click', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render (
      <Provider store={store}>
        <BookmarkButton isFavourite={false} adId={1}/>
      </Provider>,
    );

    userEvent.click(screen.getByRole('button'));
    expect(dispatch).toHaveBeenCalled();
  });
});
