import React from 'react';
import {arrayOf, shape, string, number} from 'prop-types';
import Card from '../card/card.jsx';


function CardList({ ads }) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {ads.map(({id, title}) => <Card key={id} title={title} />)}
    </div>
  );
}

CardList.propTypes = {
  ads: arrayOf(shape({
    title: string.isRequired,
    id: number,
  })).isRequired,
};

export default CardList;
