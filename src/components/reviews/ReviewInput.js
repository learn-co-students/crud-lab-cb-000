import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text !== '') {
      this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
      this.setState({ text: '' })
    };
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>Add Review: </label>
          <input type="text" onChange={this.handleChange} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
