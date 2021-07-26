import React from 'react';
import { render } from '@testing-library/react';

import ImagesList from './images-list';

const IMAGES = ['https://stevensegallery.com/54/14', 'https://stevensegallery.com/54/24', 'https://stevensegallery.com/54/54'];

describe('Component: ImagesList', () => {
  it('should render correctly', () => {
    const { queryAllByTestId } = render(<ImagesList images={IMAGES}/>);

    const contentElement = queryAllByTestId('offer-image');
    expect(contentElement).toHaveLength(IMAGES.length);
  });
});
