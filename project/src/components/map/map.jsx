import React, { useRef, useEffect } from 'react';
import { arrayOf } from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { adPropTypes } from '../../propTypes/ad.js';
import { cityPropTypes } from '../../propTypes/city.js';
import { MapPinSetting } from '../../const';
import useMap from '../../hooks/useMap';


function Map({ city, ads }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultIcon = leaflet.icon(MapPinSetting.DEFAULT);

  useEffect(() => {
    if (map) {
      ads.forEach((it) => {
        const { lat, lng } = it.address;

        leaflet
          .marker([lat, lng], {icon: defaultIcon})
          .addTo(map);
      });
    }
  }, [map, ads]);

  return <div id="map" style={{ height: '100%' }} ref={mapRef}></div>;
}

Map.propTypes = {
  city: cityPropTypes,
  ads: arrayOf(adPropTypes),
};

export default Map;
