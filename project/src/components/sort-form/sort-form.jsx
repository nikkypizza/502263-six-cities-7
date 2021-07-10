import React, { useState } from 'react';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';

import { changeSortingType } from '../../store/action';
import { SORTING_OPTIONS } from '../../const';

import SortingOptionsList from '../sorting-options-list/sorting-options-list';
import { getAdSortingType } from '../../store/ui/selectors';


function SortForm({ adSortingType, changeSortingType }) {
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
        onClick={(sortingType) => changeSortingType(sortingType)}
        activeOption={adSortingType}
        options={SORTING_OPTIONS}
      />
    </form>
  );
}

SortForm.propTypes = {
  adSortingType: string,
  changeSortingType: func,
};


const mapStateToProps = (state) => ({
  adSortingType: getAdSortingType(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSortingType(adSortingType) {
    dispatch(changeSortingType(adSortingType));
  },
});

export { SortForm };
export default connect(mapStateToProps, mapDispatchToProps)(SortForm);


