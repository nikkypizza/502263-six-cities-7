import React from 'react';
import AdCard from '../ad-card/ad-card.jsx';
import PropTypes from 'prop-types';


function AdList({ ads }) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {ads.map(() => <AdCard key={Math.random() * Math.random()} />)}
    </div>
  );
}

AdList.propTypes = {
  ads: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AdList;
