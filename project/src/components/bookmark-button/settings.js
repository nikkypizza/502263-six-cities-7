import {getSettingsVariantNames} from '../../util';

const componentVariants = {
  listing: {
    buttonClassname: 'place-card__bookmark-button',
    buttonActiveModClassname: '--active',
    svgClassname: 'place-card__bookmark-icon',
    svgWidth: 18,
    svgHeight: 19,
  },
  offerPage: {
    buttonClassname: 'property__bookmark-button',
    buttonActiveModClassname: '--active',
    svgClassname: 'property__bookmark-icon',
    svgWidth: 31,
    svgHeight: 33,
  },
};

const BookmarkNames = getSettingsVariantNames(componentVariants);

export {componentVariants, BookmarkNames};
