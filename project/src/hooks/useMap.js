import {useEffect, useState} from 'react';
import leaflet from 'leaflet';


function useMap(mapRef, city) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const {lat, lng, zoom} = city;
      const mapInstance = leaflet.map(mapRef.current, {center: {lat, lng}, zoom});

      leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'})
        .addTo(mapInstance);

      setMap(mapInstance);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
