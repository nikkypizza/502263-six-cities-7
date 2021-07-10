import React, { useRef, useEffect } from 'react';
import { arrayOf, number } from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { adPropTypes } from '../../propTypes/ad.js';
import { cityPropTypes } from '../../propTypes/city.js';
import { MapPinSetting } from '../../const';
import useMap from '../../hooks/useMap';


function Map({ city, ads, focusedAdId }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultIcon = leaflet.icon(MapPinSetting.DEFAULT);
  const activeIcon = leaflet.icon(MapPinSetting.ACTIVE);

  useEffect(() => {
    if (map) {
      const markers = leaflet.layerGroup();

      ads.forEach(({ address, id }) => {
        const { lat, lng } = address;

        leaflet
          .marker([lat, lng], { icon: id === focusedAdId ? activeIcon : defaultIcon })
          .addTo(markers);
      });

      markers.addTo(map);
      map.panTo(city);

      return () => markers.clearLayers();
    }
  }, [map, city, focusedAdId]);

  return <div id="map" style={{ height: '100%' }} ref={mapRef}></div>;
}

Map.propTypes = {
  city: cityPropTypes,
  ads: arrayOf(adPropTypes),
  focusedAdId: number,
};

export default Map;
