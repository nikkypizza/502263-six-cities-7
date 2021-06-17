import {getSettingsVariantNames} from '../../util';

const componentVariants = {
  mainPage: {
    listClassName: 'cities__places-list places__list tabs__content',
  },
  offerPage: {
    listClassName: 'near-places__list places__list',
  },
};

const CardListNames = getSettingsVariantNames(componentVariants);

export {componentVariants, CardListNames};
