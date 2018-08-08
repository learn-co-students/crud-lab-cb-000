
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
        return { ...state, restaurants: state.restaurants.concat(newRestaurant) };

    case 'DELETE_RESTAURANT':
        return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

    case 'ADD_REVIEW':
      const newReview = {
        id: cuid(),
        restaurantId: action.review.restaurantId,
        text: action.review.text
      }
      return { ...state, reviews: state.reviews.concat(newReview) };

    case 'DELETE_REVIEW':
      console.log(action)
      console.log({ ...state, reviews: state.reviews.filter(review => review.id !== action.review.id) })
      return { ...state, reviews: state.reviews.filter(review => review.id !== action.review.id)}

    default:
      return state;
  }
}
