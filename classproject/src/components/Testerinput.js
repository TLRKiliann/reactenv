import React from 'react'

export default class Testerinput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      userAge: ''
    };
    this.submit = this.submit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const btnOne = <button type='submit' onClick={this.submit}>Submit</button> 
    const btnTwo = <button>You may pass.</button> 
    const btnThree = <button>You are younger than 18 !</button> 
    return (
      <div className='div--testerinput'>
        <h3>Enter Your Age to Continue</h3>
        <input
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
          required />
        <br />
        {
          this.state.userAge === ''
          ? btnOne : this.state.userAge >= 18
          ? btnTwo : btnThree
        }
      </div>
    );
  }
}

//export default Testerinput;