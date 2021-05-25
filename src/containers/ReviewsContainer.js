import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  filteredReviews = () => this.props.reviews.filter(
    review => review.restaurantId === this.props.restaurant.id
  )

  render() {
    return (
      <div>
        {/* <ReviewInput addReview={this.props.addReview}
          restaurant={this.props.restaurant}/> */}
        <ReviewInput addReview={this.props.addReview}
          restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.filteredReviews()}
          deleteReview={this.props.deleteReview} />

      </div>
    )
  }
}

const mapStateToProps = state => {
  // const filteredReviews = state.reviews.filter(
  //     review => review.restaurantId === this.props.restaurant.id)
  // return { reviews: filteredReviews }
  return { reviews: state.reviews }
}

const mapDispatchToProps = dispatch => ({
  // addReview: (text, restaurantId) => dispatch({ type: 'ADD_REVIEW', text, restaurantId }),
  addReview: (review) => dispatch({ type: 'ADD_REVIEW', review }),
  deleteReview: id => dispatch({ type: 'DELETE_REVIEW', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
