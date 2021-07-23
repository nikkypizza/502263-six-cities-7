import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import ReviewForm from './review-form';
import { CommentFormLength } from '../../const';

const generateValidMinLengthStr = () => Array(Math.floor(Math.random() * (CommentFormLength.MAX - CommentFormLength.MIN + 1) + CommentFormLength.MIN)).fill('a').join('');

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

  it('should validate user input', () => {
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

    const stringOfNonValidLength = 'test';
    const stringOfValidLength = generateValidMinLengthStr();
    const textarea = screen.getByTestId('review-form-textarea');
    const submitBtn = screen.getByTestId('review-submit-btn');
    const inputStar = screen.getAllByTestId('input-star')[0];


    userEvent.type(textarea, stringOfNonValidLength);
    expect(submitBtn).toHaveAttribute('disabled');
    textarea.value = '';

    userEvent.type(textarea, stringOfValidLength);
    expect(submitBtn).toHaveAttribute('disabled');
    textarea.value = '';

    userEvent.type(textarea, stringOfValidLength);
    userEvent.click(inputStar);
    expect(submitBtn).not.toHaveAttribute('disabled');
  });
});
