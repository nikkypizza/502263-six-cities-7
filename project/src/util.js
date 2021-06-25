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

export {
  convertRatingToStars,
  getSettingsVariantNames,
  generateMonthYearDate,
  filterAdsByCity
};
