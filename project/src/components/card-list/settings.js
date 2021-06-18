import {getSettingsVariantNames} from '../../util';

const componentVariants = {
  mainPage: {
    listClassNameMod: 'cities__places-list tabs__content',
  },
  offerPage: {
    listClassNameMod: 'near-places__list',
  },
};

const CardListNames = getSettingsVariantNames(componentVariants);

export {componentVariants, CardListNames};
