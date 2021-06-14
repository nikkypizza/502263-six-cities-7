import React from 'react';
import { arrayOf, string } from 'prop-types';


function FeaturesList({ features }) {
  return (
    <ul className="property__inside-list">
      {features.map((it) => <li key={it} className="property__inside-item">{it}</li>)}
    </ul>
  );
}

FeaturesList.propTypes = {
  features: arrayOf(string),
};

export default FeaturesList;
