import React from 'react';
import { render } from '@testing-library/react';

import { TABS_CITIES } from '../../const';

import TabsList from './tabs-list';


describe('Component: TabsList', () => {
  it('should render correctly', () => {
    const { queryAllByTestId } = render(<TabsList cities={TABS_CITIES} activeCity={TABS_CITIES[0]}  onClick={()=>{}}/>);

    const contentElement = queryAllByTestId('tabs-item');
    expect(contentElement).toHaveLength(TABS_CITIES.length);
  });
});
