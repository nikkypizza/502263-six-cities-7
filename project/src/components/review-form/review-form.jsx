import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { bool, func, string } from 'prop-types';
import cn from 'classnames';

import { CommentFormLength, DISABLED_CLASSNAME } from '../../const.js';
import { postComment } from '../../api/api-actions.js';

import InputStarList from '../input-star-list/input-star-list.jsx';
import { setCommentIsPosted } from '../../store/action.js';
import { getCommentIsPosted } from '../../store/user/selectors.js';


function ReviewForm({ sendComment, adId, commentIsPosted }) {
  const [initialState] = useState({ rating: null, comment: '' });
  const [formData, setFormData] = React.useState(initialState);
  const formNode = useRef('');

  useEffect(() => {
    if (commentIsPosted) {
      formNode.current.reset();
      setFormData(initialState);
    }
  }, [commentIsPosted]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    sendComment(formData, adId);
  };

  const getIsButtonDisabled = () => !(formData.rating && formData.comment.length >= CommentFormLength.MIN) || !commentIsPosted;

  return (
    <form className={cn('reviews__form', 'form', !commentIsPosted && DISABLED_CLASSNAME)} action="#" method="post" onSubmit={onSubmit} ref={formNode}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <InputStarList onInput={(e) => setFormData({ ...formData, rating: e.target.value || null })} />
      <textarea onInput={(e) => setFormData({ ...formData, comment: e.target.value || '' })} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" minLength={CommentFormLength.MIN} maxLength={CommentFormLength.MAX} required></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">
            rating
          </span>
          and describe your stay with at least <b className="reviews__text-amount">{CommentFormLength.MIN} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={getIsButtonDisabled()}>
          Submit
        </button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  sendComment: func.isRequired,
  adId: string.isRequired,
  commentIsPosted: bool,
};

const mapStateToProps = (state) => ({
  commentIsPosted: getCommentIsPosted(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendComment(userInput, adId) {
    dispatch(postComment(userInput, adId));
    dispatch(setCommentIsPosted(false));
  },
});


export { ReviewForm };
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
