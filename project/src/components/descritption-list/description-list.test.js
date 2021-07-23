import React from 'react';
import { render } from '@testing-library/react';

import DescriptionList from './description-list';


const DESCRIPTIONS = ['tub', 'bed'];

describe('Component: DescriptionList', () => {
  it('should render correctly', () => {
    const { getByText } = render(<DescriptionList descriptions={DESCRIPTIONS}/>);

    const contentElement = getByText('tub');
    const secondContentElement = getByText('bed');
    expect(contentElement).toBeInTheDocument();
    expect(secondContentElement).toBeInTheDocument();
  });
});
