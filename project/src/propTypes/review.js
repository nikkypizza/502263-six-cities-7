import { shape, string, number } from 'prop-types';

const reviewPropTypes = shape({
  id: number,
  author: shape({
    name: string.isRequired,
    userPic: string,
  }),
  rating: number.isRequired,
  date: string.isRequired,
  review: string.isRequired,
});


export {reviewPropTypes};
