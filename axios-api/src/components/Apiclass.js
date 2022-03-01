import React from 'react'

export default class Apiclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState()
  }
  render() {
    return (
      <div>
        <h3>My axios render</h3>
        <p>{this.state.items}</p>
      </div>
    );
  }
}