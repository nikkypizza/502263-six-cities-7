import {getSettingsVariantNames} from '../../util';

const componentVariants = {
  main: {
    className: 'place-card__mark',
  },
  offer: {
    className: 'property__mark',
  },
};

const PremiumTagNames = getSettingsVariantNames(componentVariants);

export {componentVariants, PremiumTagNames};
