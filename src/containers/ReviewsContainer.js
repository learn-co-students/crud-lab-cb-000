import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {
  render() {

    const { restaurant, reviews, addReview, deleteReview } = this.props;

    return (
      <div>
        <ReviewInput addReview={addReview} restaurantId={restaurant.id} />
        <Reviews reviews={reviews} deleteReview={deleteReview} restaurant={restaurant} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: 'ADD_REVIEW', review }),
  deleteReview: review => dispatch({ type: 'DELETE_REVIEW', review })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
