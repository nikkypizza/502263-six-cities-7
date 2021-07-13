import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeSortingType } from '../../store/action';
import { SORTING_OPTIONS } from '../../const';

import SortingOptionsList from '../sorting-options-list/sorting-options-list';
import { getAdSortingType } from '../../store/ui/selectors';


function SortForm() {
  const dispatch = useDispatch();
  const adSortingType = useSelector(getAdSortingType);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <form
      onClick={() => setIsOpen(!isOpen)}
      onMouseLeave={() => setIsOpen(false)}
      className="places__sorting"
      action="#"
      method="get"
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {SORTING_OPTIONS.find((it) => it.adSortingType === adSortingType).title}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <SortingOptionsList
        isOpen={isOpen}
        onClick={(sortingType) => dispatch(changeSortingType(sortingType))}
        activeOption={adSortingType}
        options={SORTING_OPTIONS}
      />
    </form>
  );
}

export default SortForm;
