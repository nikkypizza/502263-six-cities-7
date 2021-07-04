import { shape, string, number, bool } from 'prop-types';

const authInfoPropTypes = shape({
  id: number,
  email: string,
  name: string,
  'avatar_url': string,
  'is_pro': bool,
  token: string,
});


export {authInfoPropTypes};
