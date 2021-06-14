import React from 'react';
import { arrayOf, string } from 'prop-types';

function DescriptionList({ descriptions }) {
  return (
    <div className="property__description">
      {descriptions.map((it) => <p key={it} className="property__text">{it}</p>)}
    </div>
  );
}

DescriptionList.propTypes = {
  descriptions: arrayOf(string),
};

export default DescriptionList;
