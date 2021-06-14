import {getSettingsVariantNames} from '../../util';

const componentVariants = {
  main: {
    className: 'place-card__mark',
  },
  offer: {
    className: 'property__mark',
  },
};

const premiumTagNames = getSettingsVariantNames(componentVariants);

export {componentVariants, premiumTagNames};
