import React from 'react';
import { string, arrayOf, shape, bool, func } from 'prop-types';
import cn from 'classnames';


function SortingOptionsList({ isOpen, onClick, options, activeOption }) {
  return (
    <ul className={cn('places__options', 'places__options--custom', { 'places__options--opened': isOpen })}>
      {options.map(({ title, adSortingType }) => (
        <li
          key={title}
          onClick={() => onClick(adSortingType)}
          className={cn('places__option', { 'places__option--active': adSortingType === activeOption })}
          tabIndex="0"
        >
          {title}
        </li>
      ))}
    </ul>
  );
}

SortingOptionsList.propTypes = {
  options: arrayOf(shape({
    title: string,
    adSortingType: string || null,
  })),
  onClick: func,
  isOpen: bool,
  activeOption: string,
};

export default SortingOptionsList;


