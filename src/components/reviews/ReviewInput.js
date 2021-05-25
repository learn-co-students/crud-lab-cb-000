import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {text: ''}

  handleOnChange = event =>  {
    this.setState({text: event.target.value})
  }

  handleOnSubmit = event => {
    event.preventDefault()
    // this.props.addReview(this.state.text, this.props.restaurantId)
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
