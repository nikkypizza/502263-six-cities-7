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

export default adaptAdsFormat;
