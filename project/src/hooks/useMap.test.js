import {renderHook} from '@testing-library/react-hooks';
import useMap from './useMap';

describe('Hook: useMap', ()=>{

  it('should return object', () => {
    const mapRef = null;
    const city = {
      address: {
        lat: 52.369553943508,
        lng: 4.85309666406198,
        zoom: 12,
      },
      name: 'Paris',
    };

    const {result} = renderHook(()=> useMap(mapRef, city));

    expect(result).toBeInstanceOf(Object);
  });
});
