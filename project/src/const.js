const DISABLED_CLASSNAME = 'disabled';

const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id?',
};

const MapPinSetting = {
  DEFAULT: {
    iconUrl: 'img/pin.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  },
};

const MapCitySetting = {
  AMSTERDAM: {
    title: 'Amsterdam',
    lat: 52.38333,
    lng: 4.9,
    zoom: 12,
  },
};

export {AppRoute, DISABLED_CLASSNAME, MapPinSetting, MapCitySetting};
