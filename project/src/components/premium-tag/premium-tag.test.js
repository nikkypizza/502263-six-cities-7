import React from 'react';
import { render } from '@testing-library/react';

import PremiumTag from './pemium-tag';


describe('Component: PremiumTag', () => {
  it('should render correctly', () => {
    const { getByText } = render(<PremiumTag />);

    const contentElement = getByText('Premium');
    expect(contentElement).toBeInTheDocument();
  });
});
