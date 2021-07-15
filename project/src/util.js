const convertRatingToStars = (rating) => {
  const RATING_MULTIPLIER = 20;
  return `${Math.round(rating) * RATING_MULTIPLIER}%`;
};

const getSettingsVariantNames = (variants) => Object.keys(variants).reduce((acc, it) => {
  acc[it.replace(/[A-Z]/g, (uppercaseLetter) => `_${uppercaseLetter}`).toUpperCase()] = it;
  return acc;
}, {});

const generateMonthYearDate = (date) => {
  const newDate = new Date(date);
  return `${newDate.toLocaleString('en', { month: 'long' })} ${newDate.getFullYear()}`;
};

const filterAdsByCity = (ads, city) => ads.filter((it) => it.city === city);

const getPluralNoun = (int, noun) => `${noun}${int === 1 ? '' : 's'}`;

const sortByKey = (arr, adSortingType) => {
  switch (adSortingType) {
    case 'priceAscending':
      return arr.slice().sort((a, b) => a.price - b.price);

    case 'priceDescending':
      return arr.slice().sort((a, b) => b.price - a.price);

    case 'ratingDescending':
      return arr.slice().sort((a, b) => b.rating - a.rating);

    default:
      return arr;
  }
};

const sortByDate = (arr) => arr.slice().sort((a,b) => new Date(b.date) - new Date(a.date));

const mapIsFavouriteToState = (fullAdInfo, ads, adsNearby, favouriteAds, payload) => {
  const matchId = (item) => item.id === payload.hotelId;

  const favouriteFromPageIndex = favouriteAds.findIndex(matchId);
  const favouriteNearby = adsNearby.find(matchId);
  const favFromTotal = ads.find(matchId);

  if (favouriteFromPageIndex > -1) {favouriteAds.splice(favouriteFromPageIndex, 1);}
  if (favouriteNearby) {favouriteNearby.isFavourite = payload.isFavourite;}
  if (favFromTotal) {favFromTotal.isFavourite = payload.isFavourite;}
  if (fullAdInfo.id === payload.hotelId) {fullAdInfo.isFavourite = payload.isFavourite;}
};

const getIsFavouriteStatusCode = (bool) => bool ? 1 : 0;

const getAdsByCityObj = (ads) => ads.reduce((acc, it) => {
  if (!acc[it.city]) { acc[it.city] = []; }
  acc[it.city].push(it);
  return acc;
}, {});

export {
  convertRatingToStars,
  getSettingsVariantNames,
  generateMonthYearDate,
  getPluralNoun,
  filterAdsByCity,
  sortByKey,
  getAdsByCityObj,
  sortByDate,
  getIsFavouriteStatusCode,
  mapIsFavouriteToState
};
