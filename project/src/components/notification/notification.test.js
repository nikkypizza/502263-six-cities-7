import React from 'react';
import { render } from '@testing-library/react';

import Notification from './notification';

const ERROR_MESSAGE = 'I am error';

describe('Component: Notification', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Notification message={ERROR_MESSAGE} onTransitionEnd={()=>{}}/>);

    const contentElement = getByText(ERROR_MESSAGE);
    expect(contentElement).toBeInTheDocument();
  });
});
