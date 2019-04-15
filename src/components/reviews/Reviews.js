import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurant, deleteReview } = this.props;

    const filteredReviews = reviews.filter(review => review.restaurantId === restaurant.id);
    const renderReviews = filteredReviews.map(r => <Review key={r.id} restaurantId={restaurant.id} review={r} delete={deleteReview} />)

    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;