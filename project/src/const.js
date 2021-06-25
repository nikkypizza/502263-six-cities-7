const DISABLED_CLASSNAME = 'disabled';
const TABS_CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const DEFAULT_CITY = TABS_CITIES[0];

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
  PARIS: {
    lat: 48.85,
    lng: 2.35,
    zoom: 12,
  },
  COLOGNE: {
    lat: 50.93,
    lng: 6.95,
    zoom: 12,
  },
  AMSTERDAM: {
    lat: 52.38333,
    lng: 4.9,
    zoom: 12,
  },
  BRUSSELS: {
    lat: 50.85,
    lng: 4.35,
    zoom: 12,
  },
  HAMBURG: {
    lat: 53.54,
    lng: 9.99,
    zoom: 12,
  },
  DUSSELDORF: {
    lat: 51.23,
    lng: 6.77,
    zoom: 12,
  },
};

export {
  AppRoute,
  DISABLED_CLASSNAME,
  MapPinSetting,
  MapCitySetting,
  TABS_CITIES,
  DEFAULT_CITY
};
