import React from 'react';
import { render } from '@testing-library/react';

import { STAR_TITLES } from './settings';

import InputStarList from './input-star-list';


describe('Component: InputStarList', () => {
  it('should render correctly', () => {
    const { queryAllByTestId } = render(<InputStarList onInput={()=>{}}/>);

    const contentElement = queryAllByTestId('input-star');
    expect(contentElement).toHaveLength(STAR_TITLES.length);
  });
});
