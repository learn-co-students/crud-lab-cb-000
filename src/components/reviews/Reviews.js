import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    return (
      this.props.reviews.map(
        (review) => <Review 
          review={review} 
          deleteReview={this.props.deleteReview} 
          key={review.id} />
    ))
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;