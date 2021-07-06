const adaptCommentsFormat = (arr) => arr.reduce((acc, it) => {
  acc.push({
    id: it.id,
    author: {
      id: it.user.id,
      name: it.user.name,
      userPic: it.user.avatar_url,
      isPro: it.user.is_pro,
    },
    rating: it.rating,
    date: it.date,
    review: it.comment,
  });
  return acc;
}, []);

export default adaptCommentsFormat;
