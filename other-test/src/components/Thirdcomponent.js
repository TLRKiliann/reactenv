import React from 'react'

export default class Thirdcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        thirdobj: props.thirdobj,
        secItems: props.thirdobjTwo
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState()
  }
  render() {
    return (
      <React.Fragment>
        <p>{this.state.thirdobj}</p>
        <p>{this.state.secItems}</p>
      </React.Fragment>
    );
  }
}