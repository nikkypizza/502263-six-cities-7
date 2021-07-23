import React from 'react';
import { render } from '@testing-library/react';

import LoadWrapper from './load-wrapper';


describe('Component: LoadWrapper', () => {
  it('should render Spinner when not done loading', () => {
    const { queryByText } = render(
      <LoadWrapper isLoad={false}>
        <span>I am the only child</span>
      </LoadWrapper>,
    );

    const childElement = queryByText('I am the only child');
    const loaderElement = queryByText('Loading data...');

    expect(childElement).not.toBeInTheDocument();
    expect(loaderElement).toBeInTheDocument();
  });

  it('should render children when done loading', () => {
    const { queryByText } = render(
      <LoadWrapper isLoad>
        <span>I am the only child</span>
      </LoadWrapper>,
    );

    const childElement = queryByText('I am the only child');
    const loaderElement = queryByText('Loading data...');

    expect(loaderElement).not.toBeInTheDocument();
    expect(childElement).toBeInTheDocument();
  });
});
