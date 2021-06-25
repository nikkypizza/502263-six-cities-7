import {getSettingsVariantNames} from '../../util';

const componentVariants = {
  mainPage: {
    cardClassNameMod: 'cities__place-card',
    imageWrapperClassNameMod: 'cities__image-wrapper',
  },
  offerPage: {
    cardClassNameMod: 'near-places__card',
    imageWrapperClassNameMod: 'near-places__image-wrapper',
  },
};

const CardNames = getSettingsVariantNames(componentVariants);

export {componentVariants, CardNames};
