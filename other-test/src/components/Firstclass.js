import React from 'react'

export default class Firstclass extends React.Component {
  render() {
    return (
      <div className='first--class'>
        <h3>My first class</h3>
        <p key={this.props.id}>{this.props.id}</p>
        <p>{this.props.name}</p>
        <p>{this.props.status}</p>
      </div>
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