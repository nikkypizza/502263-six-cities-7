import React from 'react';
import { Link } from 'react-router-dom';
import { string, bool } from 'prop-types';

import { componentVariants, logoNames } from './settings.js';
import { AppRoute, DISABLED_CLASSNAME } from '../../const.js';


function Logo({ variant = logoNames.HEADER, isDisabled = false }) {
  return (
    <Link
      className={[componentVariants[variant].linkClassName, isDisabled ? DISABLED_CLASSNAME : ''].join(' ')}
      tabIndex={isDisabled ? '-1' : undefined}
      to={AppRoute.ROOT}
    >
      <img
        className={componentVariants[variant].imgClassName}
        src="img/logo.svg"
        alt="6 cities logo"
        width={componentVariants[variant].imgWidth}
        height={componentVariants[variant].imgHeight}
      />
    </Link>
  );
}

Logo.propTypes = {
  variant: string,
  isDisabled: bool,
};

export default Logo;
