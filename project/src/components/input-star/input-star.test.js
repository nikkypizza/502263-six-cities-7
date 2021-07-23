import React from 'react';
import { render } from '@testing-library/react';

import InputStar from './input-star';

const STAR_DATA = {ratingInt: 5, ratingStr: 'perfect'};

describe('Component: InputStar', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<InputStar data={STAR_DATA} onInput={()=>{}}/>);

    const contentElement = getByTestId('input-star');
    expect(contentElement).toBeInTheDocument();
  });
});
