import React from 'react'
import Practical from './Practical'

class Practiceclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
    };
  this.increment = this.increment.bind(this)
  this.decrement = this.decrement.bind(this)
  this.reset = this.reset.bind(this)
  }
  increment() {
    this.setState(state => ({
        count: state.count += 1
    })
  )}
  decrement() {
    this.setState(state => ({
        count: state.count -= 1
    })
  )}
  reset() {
    this.setState({count: 0})
  }
  render() {
    return (
      <div className='div--stateclass'>
        <h3>Practiceclass.js</h3>
        <button onClick={this.increment}>
          Increment !
        </button>
        <button onClick={this.decrement}>
          Decrement !
        </button>
        <button onClick={this.reset}>
          Reset !
        </button>
        {this.state.count}
        <Practical />
      </div>
    );
  }
};

export default Practiceclass;