import React from 'react'

export default class Firstclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      status: props.status
    };
  }
  render() {
    return (
      <React.Fragment>
        <h3>My fragment</h3>
        <p>{this.state.id}</p>
        <p>{this.state.name}</p>
        <p>{this.state.status}</p>
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