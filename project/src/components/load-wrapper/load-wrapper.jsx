import React from 'react';
import { arrayOf, bool, node, oneOfType } from 'prop-types';

import Loader from '../loader/loader';


function LoadWrapper({ isLoad, children, Spinner = Loader }) {
  return (isLoad && children) || <Spinner />;
}

LoadWrapper.propTypes = {
  isLoad: bool.isRequired,
  children: oneOfType([
    arrayOf(node),
    node,
  ]).isRequired,
  Spinner: node,
};


export default LoadWrapper;
