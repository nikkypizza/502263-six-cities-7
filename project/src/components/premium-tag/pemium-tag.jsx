import { string } from 'prop-types';
import React from 'react';

import {componentVariants, PremiumTagNames} from './settings.js';


function PremiumTag({ variant = PremiumTagNames.MAIN}) {
  const {className} = componentVariants[variant];
  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}

PremiumTag.propTypes = {
  variant: string,
};

export default PremiumTag;
