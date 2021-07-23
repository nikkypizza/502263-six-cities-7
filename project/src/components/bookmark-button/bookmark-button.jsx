import React from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { bool, number, string } from 'prop-types';

import { BookmarkNames, componentVariants } from './settings.js';
import { setIsFavouriteAd } from '../../api/api-actions.js';


function BookmarkButton({ isFavourite, adId, variant = BookmarkNames.LISTING }) {
  const { buttonClassname, buttonActiveModClassname, svgClassname, svgWidth, svgHeight } = componentVariants[variant];
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsFavouriteAd(adId, !isFavourite));
  };

  return (
    <button className={cn('button', buttonClassname, { [`${buttonClassname}${buttonActiveModClassname}`]: isFavourite })} type="button" onClick={handleClick} title={`${isFavourite ? 'Remove from' : 'Add to'} favourites`}>
      <svg className={svgClassname} width={svgWidth} height={svgHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

BookmarkButton.propTypes = {
  isFavourite: bool.isRequired,
  adId: number.isRequired,
  variant: string,
};


export default BookmarkButton;
