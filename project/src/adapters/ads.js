const adaptAdFormat = (ad) => ({
  id: ad.id,
  city: ad.city.name,
  title: ad.title,
  descriptions: [ad.description],
  photos: {
    main: ad.preview_image,
    all: ad.images,
  },
  price: ad.price,
  rating: ad.rating,
  offerType: ad.type,
  isPremium: ad.is_premium,
  isFavourite: ad.is_favorite,
  bedroomsAmount: ad.bedrooms,
  capacity: ad.max_adults,
  features: ad.goods,
  address: {
    lat: ad.location.latitude,
    lng: ad.location.longitude,
    zoom: ad.location.zoom,
  },
  host: {
    id: ad.host.id,
    name: ad.host.name,
    userPic: ad.host.avatar_url,
    isPro: ad.host.is_pro,
  },
});

export default adaptAdFormat;
