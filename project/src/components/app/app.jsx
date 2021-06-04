import React from 'react';
import MainScreen from '../main-screen/main-screen.jsx';
import PropTypes from 'prop-types';

function App({ ads }) {
  return (
    <MainScreen ads={ads} />
  );
}

App.propTypes = {
  ads: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
