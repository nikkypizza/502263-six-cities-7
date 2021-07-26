import React from 'react';
import { render } from '@testing-library/react';

import Map from './map';

const ADS = [{id: 1,city: 'Paris',address: {lat: 52.369553943508,lng: 4.85309666406198, zoom: 12}},{id: 2,city: 'Cologne',address: {lat: 52.3909553943508,lng: 4.929309666406198, zoom: 12}}];

describe('Component: Map', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Map city={ADS[0].address} ads={ADS} focusedAdId={null}/>);

    const contentElement = getByTestId('pins-map');
    expect(contentElement).toBeInTheDocument();
  });
});
