import { func } from 'prop-types';
import React from 'react';

import { STAR_TITLES } from './settings.js';

import InputStar from '../input-star/input-star.jsx';


function InputStarList({ onInput }) {
  return (
    <div className="reviews__rating-form form__rating">
      {STAR_TITLES.map((it) => <InputStar key={it.ratingStr} onInput={onInput} data={it} />)}
    </div>
  );
}

InputStarList.propTypes = {
  onInput: func,
};

export default InputStarList;
