import React from 'react'

export default class Firstclass extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>My fragment</h3>
        <p key={this.props.id}>{this.props.id}</p>
        <p>{this.props.name}</p>
        <p>{this.props.status}</p>
      </React.Fragment>
    );
  }
};


/*
this.handleChange = this.handleChange.bind(this);

handleChange() {
  this.setState(prevState => {
    ...prevState,
    [name]: state.name
  })
}
*/