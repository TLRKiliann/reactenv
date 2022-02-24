import React from 'react'

export default class Practical extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  this.adder = this.adder.bind(this)
  this.substracter = this.substracter.bind(this)
  this.reseter = this.reseter.bind(this)
  }
  adder() {
    this.setState(state => ({
      counter: state.counter += 1
    })
  )}
  substracter() {
    this.setState(state => ({
      counter: state.counter -= 1
    })
  )}
  reseter() {
    this.setState({counter: 0})
  }
  render() {
    return (
      <div className='third--divclass'>
        <h3>
          Practical.js
        </h3>
        <button onClick={this.adder}>
          Add
        </button>
        <button onClick={this.substracter}>
          substract
        </button>
        <button onClick={this.reseter}>
          Reset !
        </button>
        {this.state.counter}
      </div>
    );
  }
};

//export default Practical;