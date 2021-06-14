import React from 'react';
import ReactDOM from 'react-dom';

import { OFFERS_DATA } from './mocks/offers';
import { REVIEWS_DATA } from './mocks/reviews';

import App from './components/app/app';


ReactDOM.render(
  <React.StrictMode>
    <App
      ads={OFFERS_DATA}
      reviews={REVIEWS_DATA}
    />
  </React.StrictMode>,
  document.getElementById('root'));
