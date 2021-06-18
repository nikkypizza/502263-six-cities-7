import React from 'react';

import Card from '../card/card.jsx';
import { arrayOf, string } from 'prop-types';

import { adPropTypes } from '../../propTypes/ad.js';
import { CardListNames, componentVariants } from './settings.js';


function CardList({ ads, variant = CardListNames.MAIN_PAGE }) {
  const [, setActiveOfferId] = React.useState(null);
  const { listClassNameMod } = componentVariants[variant];

  return (
    <div className={`${listClassNameMod} places__list`}>
      {ads.map((it) => (
        <Card
          key={it.id}
          data={it}
          variant={variant}
          onMouseEnter={() => setActiveOfferId(it.id)}
          onMouseLeave={() => setActiveOfferId(null)}
        />))}
    </div>
  );
}

CardList.propTypes = {
  ads: arrayOf(adPropTypes).isRequired,
  variant: string,
};

export default CardList;
