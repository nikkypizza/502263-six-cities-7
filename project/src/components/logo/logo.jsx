import React from 'react';
import { Link } from 'react-router-dom';
import { string, bool } from 'prop-types';
import cn from 'classnames';

import { componentVariants, LogoNames } from './settings.js';
import { AppRoute, DISABLED_CLASSNAME } from '../../const.js';


function Logo({ variant = LogoNames.HEADER, isDisabled = false }) {
  const { linkClassName, imgClassName, imgWidth, imgHeight } = componentVariants[variant];
  return (
    <Link
      className={cn(linkClassName, isDisabled && DISABLED_CLASSNAME)}
      tabIndex={isDisabled ? '-1' : undefined}
      to={AppRoute.ROOT}
      data-testid='footer-link'
    >
      <img
        className={imgClassName}
        src="img/logo.svg"
        alt="6 cities logo"
        width={imgWidth}
        height={imgHeight}
      />
    </Link>
  );
}

Logo.propTypes = {
  variant: string,
  isDisabled: bool,
};

export default Logo;
