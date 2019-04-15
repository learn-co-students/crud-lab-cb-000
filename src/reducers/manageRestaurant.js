
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [], reviews: []
}, action) {
  switch(action.type){
    case "ADD_RESTAURANT": {
      const restaurant = {text: action.restaurant, id: cuidFn()}
      return {
        ...state,
        restaurants: [...state.restaurants, restaurant]
      };
    }

    case "DELETE_RESTAURANT": {
      return {
        ...state,
        restaurants: state.restaurants.filter(r => r.id !== action.restaurant.id)
      }
    }

    case "ADD_REVIEW": {
      console.log(action)
      const review = {text: action.review.text, id: cuidFn(), restaurantId: action.review.restaurantId}
      return {
        ...state,
        reviews: [...state.reviews, review]
      }
    }

    case "DELETE_REVIEW": {
      return {
        ...state,
        reviews: state.reviews.filter(r => r.id !== action.review.id)
      }
    }

    default:
      return state;
  }
};
