import React from 'react';
import { render } from '@testing-library/react';

import ServerErrorPage from './server-error-page';


describe('Component: ServerErrorPage', () => {
  it('should render correctly', () => {
    const { getByText } = render(<ServerErrorPage />);

    const contentElement = getByText(/We are currently experiencing technical difficulties with our application/);
    expect(contentElement).toBeInTheDocument();
  });
});
