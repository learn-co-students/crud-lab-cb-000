
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
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

    default:
      return state;
  }
}
