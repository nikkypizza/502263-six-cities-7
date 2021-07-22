import React from 'react';
import { render } from '@testing-library/react';

import CityPlacesEmpty from './city-places-empty';


describe('Component: CityPlacesEmpty', () => {
  it('should render correctly', () => {
    const { getByText } = render(<CityPlacesEmpty activeCity="Amsterdam"/>);

    const contentElement = getByText('No places to stay available');
    expect(contentElement).toBeInTheDocument();
  });
});
