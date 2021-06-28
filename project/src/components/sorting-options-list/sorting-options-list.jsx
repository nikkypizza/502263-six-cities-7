import React from 'react';
import { string, arrayOf, shape, bool, func } from 'prop-types';

function SortingOptionsList({ isOpen, onClick, options, activeOption }) {
  return (
    <ul className={`places__options places__options--custom  ${isOpen ? 'places__options--opened' : ''}`}>
      {options.map(({ title, adSortingType }) => (
        <li
          key={title}
          onClick={() => onClick(adSortingType)}
          className={`places__option ${adSortingType === activeOption ? 'places__option--active' : ''}`}
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


