import React from 'react';

import Card from '../card/card.jsx';
import { arrayOf } from 'prop-types';

import { adPropTypes } from '../../propTypes/ad.js';


function CardList({ ads }) {
  const [, setActiveOffer] = React.useState({
    activeOfferId: null,
  });

  return (
    <div className="cities__places-list places__list tabs__content">
      {ads.map((it) => (
        <Card
          key={it.id}
          data={it}
          onMouseEnter={() => setActiveOffer({ activeOfferId: it.id })}
          onMouseLeave={() => setActiveOffer({ activeOfferId: null })}
        />))}
    </div>
  );
}

CardList.propTypes = {
  ads: arrayOf(adPropTypes).isRequired,
};

export default CardList;
