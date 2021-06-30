import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createApi } from './api/api.js';

import { reducer } from './store/reducer';
import { REVIEWS_DATA } from './mocks/reviews';

import App from './components/app/app';
import { fetchOffers } from './api/api-actions.js';

const api = createApi();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)),
  ));

store.dispatch(fetchOffers());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={REVIEWS_DATA}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
