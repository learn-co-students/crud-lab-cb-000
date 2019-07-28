
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageReviews(state = {
  reviews: []
}, action) {

  switch (action.type) {
    case 'ADD_REVIEW':
      const review = {
        id: cuid(),
        restaurantId: action.review.restaurantId,
        text: action.review.text
      }
      return { ...state, reviews: [...state.reviews, review] }

    case 'DELETE_REVIEW':
      return {reviews: state.reviews.filter(reviews => review.id !== action.id)}

    default:
      return state;
  }

};
