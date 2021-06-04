import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  ADS: [{}, {}, {}, {}, {}],
};

ReactDOM.render(
  <React.StrictMode>
    <App
      ads={Setting.ADS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
