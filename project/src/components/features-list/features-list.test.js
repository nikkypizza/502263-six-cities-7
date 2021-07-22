import React from 'react';
import { render } from '@testing-library/react';

import FeaturesList from './features-list';


describe('Component: FeaturesList', () => {
  it('should render correctly', () => {
    const FEATURES = ['tub', 'bed'];
    const { getByText } = render(<FeaturesList features={FEATURES}/>);

    const contentElement = getByText('tub');
    const secondContentElement = getByText('bed');

    expect(contentElement).toBeInTheDocument();
    expect(secondContentElement).toBeInTheDocument();
  });
});
