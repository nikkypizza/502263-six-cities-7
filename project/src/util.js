const convertRatingToStars = (rating) => {
  const RATING_MULTIPLIER = 20;
  return `${rating * RATING_MULTIPLIER}%`;
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

const adaptAdsFormat = (arr) => arr.reduce((acc, it) => {
  acc.push({
    id: it.id,
    city: it.city.name,
    title: it.title,
    descriptions: [it.description],
    photos: {
      main: it.preview_image,
      all: it.images,
    },
    price: it.price,
    rating: it.rating,
    offerType: it.type,
    isPremium: it.is_premium,
    isFavourite: it.is_favorite,
    bedroomsAmount: it.bedrooms,
    capacity: it.max_adults,
    features: it.goods,
    address: {
      lat: it.location.latitude,
      lng: it.location.longitude,
      zoom: it.location.zoom,
    },
    host: {
      id: it.host.id,
      name: it.host.name,
      userPic: it.host.avatar_url,
      isPro: it.host.is_pro,
    },
  });
  return acc;
}, []);

export {
  convertRatingToStars,
  getSettingsVariantNames,
  generateMonthYearDate,
  getPluralNoun,
  filterAdsByCity,
  sortByKey,
  adaptAdsFormat
};
