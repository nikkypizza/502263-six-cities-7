const adaptCommentFormat = (comment) => ({
  id: comment.id,
  author: {
    id: comment.user.id,
    name: comment.user.name,
    userPic: comment.user.avatar_url,
    isPro: comment.user.is_pro,
  },
  rating: comment.rating,
  date: comment.date,
  review: comment.comment,
});

export default adaptCommentFormat;
