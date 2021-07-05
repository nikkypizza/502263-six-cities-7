import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, func, string } from 'prop-types';
import cn from 'classnames';

import { ActionCreator } from '../../store/action.js';
import { adPropTypes } from '../../propTypes/ad.js';
import { CardListNames, componentVariants } from './settings.js';

import Card from '../card/card.jsx';


function CardList({ ads, variant = CardListNames.MAIN_PAGE, changeFocusedAdId }) {
  const { listClassNameMod } = componentVariants[variant];
  const isMainPage = variant === CardListNames.MAIN_PAGE;

  return (
    <div className={cn(listClassNameMod, 'places__list')}>
      {ads.map((it) => (
        <Card
          key={it.id}
          data={it}
          variant={variant}
          onMouseEnter={() => isMainPage && changeFocusedAdId(it.id)}
          onMouseLeave={() => isMainPage && changeFocusedAdId(null)}
        />))}
    </div>
  );
}

CardList.propTypes = {
  ads: arrayOf(adPropTypes).isRequired,
  variant: string,
  changeFocusedAdId: func,
};

const mapDispatchToProps = (dispatch) => ({
  changeFocusedAdId(newId) {
    dispatch(ActionCreator.changeFocusedAdId(newId));
  },
});

export { CardList };
export default connect(null, mapDispatchToProps)(CardList);
