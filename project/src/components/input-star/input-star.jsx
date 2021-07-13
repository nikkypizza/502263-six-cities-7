import React, { memo } from 'react';
import { func, number, shape, string } from 'prop-types';


function InputStar({ data, onInput }) {
  const { ratingInt, ratingStr } = data;
  return (
    <>
      <input onInput={onInput} className="form__rating-input visually-hidden" name="rating" value={ratingInt} id={`${ratingInt}-stars`} type="radio" required />
      <label htmlFor={`${ratingInt}-stars`} className="reviews__rating-label form__rating-label" title={ratingStr}>
        <svg className="form__star-image" width="37" height="33"><use xlinkHref="#icon-star"></use></svg>
      </label>
    </>
  );
}

InputStar.propTypes = {
  data: shape({
    ratingInt: number.isRequired,
    ratingStr: string.isRequired,
  }),
  onInput: func.isRequired,
};

export default memo(InputStar);
