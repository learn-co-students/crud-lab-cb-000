import cuid from 'cuid'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  reviews: reviewsReducer
})

export default rootReducer

function restaurantsReducer(state = [], action) {
  switch(action.type) {

    case 'ADD_RESTAURANT':
      const newRestaurant = {
        id: cuid(),
        text: action.name
      }
      return  [...state, newRestaurant]

    case 'DELETE_RESTAURANT':
      return [...state.filter(
        restaurant => restaurant.id !== action.id
      )]

    default: return state
  }
}

function reviewsReducer(state = [], action) {
  switch(action.type) {

    case 'ADD_REVIEW':
      const newReview = {
        id: cuid(),
        // text: action.text,
        text: action.review.text,
        // restaurantId: action.restaurantId
        restaurantId: action.review.restaurantId
      }
      return  [...state, newReview]

    case 'DELETE_REVIEW':
      return [...state.filter(
        review => review.id !== action.id
      )]

    default: return state
  }
}