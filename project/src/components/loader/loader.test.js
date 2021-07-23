import React from 'react';
import { render } from '@testing-library/react';

import Loader from './loader';


describe('Component: Loader', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Loader />);

    const contentElement = getByText('Loading data...');
    expect(contentElement).toBeInTheDocument();
  });
});
