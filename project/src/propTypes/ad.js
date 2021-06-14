import { arrayOf, shape, string, number, bool } from 'prop-types';

const adPropTypes = shape({
  id: number.isRequired,
  city: string.isRequired,
  title: string.isRequired,
  descriptions: arrayOf(string),
  photos: shape({
    main: string.isRequired,
    all: arrayOf(string),
  }),
  price: number.isRequired,
  rating: number.isRequired,
  offerType: string.isRequired,
  isPremium: bool.isRequired,
  bedroomsAmount: number.isRequired,
  capacity: number.isRequired,
  features: arrayOf(string),
  address: shape({
    lat: number.isRequired,
    lng: number.isRequired,
  }),
  host: shape({
    name: string.isRequired,
    userPic: string.isRequired,
    isPro: bool,
  }),
});


export {adPropTypes};
