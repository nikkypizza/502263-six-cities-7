import React from 'react';
import {arrayOf, object} from 'prop-types';
import MainPage from '../pages/main-page/main-page.jsx';

function App({ ads }) {
  return (
    <MainPage ads={ads} />
  );
}

App.propTypes = {
  ads: arrayOf(object).isRequired,
};

export default App;
