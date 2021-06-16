import { string } from 'prop-types';
import React from 'react';

import {componentVariants, premiumTagNames} from './settings.js';


function PremiumTag({ variant = premiumTagNames.MAIN}) {
  return (
    <div className={componentVariants[variant].className}>
      <span>Premium</span>
    </div>
  );
}

PremiumTag.propTypes = {
  variant: string,
};

export default PremiumTag;
