const DISABLED_CLASSNAME = 'disabled';
const TABS_CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const DEFAULT_CITY = TABS_CITIES[0];
const MAX_PHOTOS_IN_AD = 6;

const SORTING_OPTIONS = [{
  title: 'Popular',
  adSortingType: null,
},
{
  title: 'Price: low to high',
  adSortingType: 'priceAscending',
},
{
  title: 'Price: high to low',
  adSortingType: 'priceDescending',
},
{
  title: 'Top rated first',
  adSortingType: 'ratingDescending',
},
];

const DEFAULT_SORTING_TYPE = SORTING_OPTIONS[0].adSortingType;

const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id?',
};

const APIRoute = {
  ADS: '/hotels',
  ADS_NEARBY: '/nearby',
  REVIEWS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

const UserRole = {
  VISITOR: 'VISITOR',
  USER: 'USER',
};

const MapPinSetting = {
  DEFAULT: {
    iconUrl: 'img/pin.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  },
  ACTIVE: {
    iconUrl: 'img/pin-active.svg',
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

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};


export {
  AppRoute,
  APIRoute,
  DISABLED_CLASSNAME,
  MAX_PHOTOS_IN_AD,
  MapPinSetting,
  MapCitySetting,
  TABS_CITIES,
  DEFAULT_CITY,
  DEFAULT_SORTING_TYPE,
  SORTING_OPTIONS,
  UserRole,
  AuthorizationStatus
};
