
--------------------------------------------------------
// Class react with API

import React from 'react'

class Myappi extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      items: [],
      DataisLoaded: false
    };
  }
  componentDidMount() {
    fetch('url')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        })
      })
      .catch((error) => console.log(error));
  }
  render() {
    if (!DataisLoaded) {
      <div><h3>Plz wait ...</h3></div>
    }
    return (
      <div>
        <h3>My title for fetch</h3> {
          items.map((item) => (
          <nav key={item.id}>
            <li>UserName: {item.name}</li>
            <li></li>
          </nav>
        )}
      </div>
    )
  }
}

--------------------------------------------------------
// Class react with counter

class Matruc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  this.adder = this.adder.bind(this)
  this.substract = this.substract.bind(this)
  this.reseter = this.reseter.bind(this)
  }
  adder() {
    this.setState(state => ({
      count: state.count += 1
    })
  }
  substract() {
    this.setState(state => ({
      count: state.count -= 1
    })
  }
  reseter() {
    this.setState({count: 0})
  }
  render() {
    return (
      <div>
        <button onClick={this.adder}>
          Add
        </button>
        <button onClick={this.substract}>
          Substract
        </button>
        <button onClick={this.reseter}>
          Reset
        </button>
        {this.state.count}
      </div>
    )
  }
}

--------------------------------------------------------
// Class react (complex) 
//input: e.target.value
//userAge: state.input

import React from 'react'

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      userAge: ''
    };
  this.handleChange = this.handleChange.bind(this)
  this.submit = this.submit.bind(this)
  }
  handleChange(e) {
    this.setState(state => {
      input: e.target.value
      userAge: ''
    })
  }
  submit() {
    this.setState(state => {
      userAge: state.input
    })
  }
  render() {
    const btnOne =  <button
                      type='submit'
                      onClick={this.submit}
                    >
                      Submit
                    </button>
    const btnTwo = <button>You may enter</button>
    const btnThree = <button>You shall no pass</button>
    return (
      <div className='div--input'>
        <input
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
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