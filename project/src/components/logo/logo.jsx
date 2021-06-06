import React from 'react';
import { Link } from 'react-router-dom';
import { string, bool } from 'prop-types';

import { AppRoute, DISABLED_CLASSNAME } from '../../const';

const logoTypes = {
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

function Logo({ type = 'header', isDisabled = false }) {
  return (
    <Link
      className={[logoTypes[type].linkClassName, isDisabled && DISABLED_CLASSNAME].join(' ')}
      tabIndex={isDisabled ? '-1' : undefined}
      to={AppRoute.ROOT}
    >
      <img
        className={logoTypes[type].imgClassName}
        src="img/logo.svg"
        alt="6 cities logo"
        width={logoTypes[type].imgWidth}
        height={logoTypes[type].imgHeight}
      />
    </Link>
  );
}

Logo.propTypes = {
  type: string,
  isDisabled: bool,
};

export default Logo;
