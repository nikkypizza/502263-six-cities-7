import React from 'react';
import { arrayOf, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { changeFocusedAdId } from '../../store/action.js';
import { adPropTypes } from '../../propTypes/ad.js';
import { CardListNames, componentVariants } from './settings.js';

import Card from '../card/card.jsx';


function CardList({ ads, variant = CardListNames.MAIN_PAGE }) {
  const { listClassNameMod } = componentVariants[variant];
  const isMainPage = variant === CardListNames.MAIN_PAGE;

  const dispatch = useDispatch();

  return (
    <div className={cn(listClassNameMod, 'places__list')}>
      {ads.map((it) => (
        <Card
          key={it.id}
          data={it}
          variant={variant}
          onMouseEnter={() => isMainPage && dispatch(changeFocusedAdId(it.id))}
          onMouseLeave={() => isMainPage && dispatch(changeFocusedAdId(null))}
        />))}
    </div>
  );
}

CardList.propTypes = {
  ads: arrayOf(adPropTypes).isRequired,
  variant: string,
};

export default CardList;
