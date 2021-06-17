import { shape, string, number } from 'prop-types';

const cityPropTypes = shape({
  title: string,
  lat: number.isRequired,
  lng: number.isRequired,
  zoom: number.isRequired,
});


export {cityPropTypes};
