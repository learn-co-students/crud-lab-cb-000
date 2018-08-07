import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Restaurant</label>
          <input type="text" value={this.state.text} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
