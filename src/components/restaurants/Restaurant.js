import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  handleDeleteClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    // this isn't saving any code, at least not here. an explanation for why this was pre-coded as such would be nice.
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text} &nbsp;&nbsp;
          <button onClick={this.handleDeleteClick}> X </button>
          <ReviewsContainer restaurant={restaurant} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
