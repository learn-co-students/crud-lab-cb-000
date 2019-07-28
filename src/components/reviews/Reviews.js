import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews ? this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id).map(review => <Review deleteReview={this.props.deleteReview} key={review.id} review={review} />) : <li>No Reviews</li>}
      </ul>
    );
  }
};

export default Reviews;
