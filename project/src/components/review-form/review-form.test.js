import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import ReviewForm from './review-form';

const mockStore = configureStore();

describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    const store = mockStore({
      UI:  {isCommentPostError: null},
      USER: {commentSendStatus: null},
    });

    const history = createMemoryHistory();

    render (
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm adId='1'/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/To submit review please make sure to set/)).toBeInTheDocument();
  });
});
