
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [], reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const newRestaurant = {
        id: cuid(),
        text: action.name
      }
        return { restaurants: state.restaurants.concat(newRestaurant) };

    case 'DELETE_RESTAURANT':
        return { restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

    case 'ADD_REVIEW':
      const newReview = {
        id: cuid(),
        restaurantId: action.restaurantId,
        text: action.name
      }
      console.log({ ...state, reviews: state.reviews.concat(newReview) })
      return { ...state, reviews: state.reviews.concat(newReview) };

    case 'DELETE_REVIEW':
      return { reviews: state.reviews.filter(review => review.id !== action.id)}

    default:
      return state;
  }
}
