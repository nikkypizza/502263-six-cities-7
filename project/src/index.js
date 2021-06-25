import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import { reducer } from './store/reducer';
import { OFFERS_DATA } from './mocks/offers';
import { REVIEWS_DATA } from './mocks/reviews';

import App from './components/app/app';


const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        ads={OFFERS_DATA}
        reviews={REVIEWS_DATA}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
