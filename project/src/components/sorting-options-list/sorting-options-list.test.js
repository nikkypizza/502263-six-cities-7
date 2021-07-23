import React from 'react';
import { render } from '@testing-library/react';

import SortingOptionsList from './sorting-options-list';

const SORTING_OPTIONS = [
  {title: 'Popular', adSortingType: null},
  {title: 'Price: low to high', adSortingType: 'priceAscending'},
  {title: 'Price: high to low', adSortingType: 'priceDescending'},
  {title: 'Top rated first', adSortingType: 'ratingDescending'},
];

describe('Component: SortingOptionsList', () => {
  it('should render correctly', () => {
    const { getByText } = render(<SortingOptionsList isOpen={false} onClick={() => {}} activeOption={SORTING_OPTIONS[0].title} options={SORTING_OPTIONS}/>);

    const popularOption = getByText('Popular');
    const ratingDescendingOption = getByText('Top rated first');

    expect(popularOption).toBeInTheDocument();
    expect(ratingDescendingOption).toBeInTheDocument();
  });
});
