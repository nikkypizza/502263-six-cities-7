import React from 'react';

import InputStarList from '../input-star-list/input-star-list.jsx';


function ReviewForm() {
  const [formData, setFormData] = React.useState({
    rating: null,
    comment: null,
  });

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <InputStarList onInput={(e) => setFormData({ ...formData, rating: e.target.value || null })}/>
      <textarea onInput={(e) => setFormData({ ...formData, comment: e.target.value || null })} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!(formData.rating && formData.comment?.length >= 50)}>Submit</button>
      </div>
    </form>
  );
}


export default ReviewForm;
