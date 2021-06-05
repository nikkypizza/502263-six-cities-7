import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  ADS: [{
    id: 1,
    title: 'Beautiful & luxurious apartment at great location',
  }, {
    id: 2,
    title: 'Wood and stone place',
  }, {
    id: 3,
    title: 'Canal View Prinsengracht',
  }, {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
  }, {
    id: 5,
    title: 'Wood and stone place',
  }],
};

ReactDOM.render(
  <React.StrictMode>
    <App
      ads={Setting.ADS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
