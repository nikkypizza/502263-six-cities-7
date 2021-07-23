import React from 'react';
import { render } from '@testing-library/react';

import FavouritesEmpty from './favourites-empty';


describe('Component: FavouritesEmpty', () => {
  it('should render correctly', () => {
    const { getByText } = render(<FavouritesEmpty/>);

    const contentElement = getByText('Nothing yet saved.');

    expect(contentElement).toBeInTheDocument();
  });
});
