import {getSettingsVariantNames} from '../../util';

const componentVariants = {
  header: {
    linkClassName: 'header__logo-link',
    imgClassName: 'header__logo',
    imgWidth: 81,
    imgHeight: 41,
  },
  footer: {
    linkClassName: 'footer__logo-link',
    imgClassName: 'footer__logo',
    imgWidth: 64,
    imgHeight: 33,
  },
};

const logoNames = getSettingsVariantNames(componentVariants);

export {componentVariants, logoNames};
