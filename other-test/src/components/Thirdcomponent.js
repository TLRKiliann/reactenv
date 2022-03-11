import React from 'react'

export default class Thirdcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        thirdobj: props.thirdobj,
        thirdobjTwo: props.thirdobjTwo,
        dataInput: "",
        colstyle: "blue",
        butt: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle(e) {
    if (this.state.dataInput.length >= 10) {
      this.setState(oldState => ({
        ...oldState,
        colstyle: !this.state.colstyle
      }))
    } else {
      return alert("Not enough !!!")
    }
  }

  handleChange(e) {
    this.setState({dataIput: e.target.value})
  }

  render() {
    return (
      <React.Fragment>
        <h3>Third component file !</h3>
        <p>{this.props.thirdobj}</p>
        <p>{this.props.thirdobjTwo}</p>
        <input
          value={this.state.dataInput}
          onChange={(e) => this.setState({dataInput: e.target.value})}
          placeholder='Enter minimum 10 caracters'>
        </input>
        
        {this.state.colstyle &&  <button 
          style={{color: 'white', background: this.state.colstyle ? 'red' : 'blue'}} 
          onClick={e => this.toggle(e)}>
            10 string
        </button>}
        {!this.state.colstyle &&  <button 
          style={{color: 'white', background: this.setState.colstyle ? 'red' : 'blue'}} 
          onClick={e => this.toggle(e)}>
            Save Ok
        </button>}
        <p>{this.state.dataInput}</p>
      </React.Fragment>
    );
  }
}
