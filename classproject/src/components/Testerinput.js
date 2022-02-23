import React from 'react'

class Testerinput extends React.Component {
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
    this.setState(state => ({
      input: e.target.value
      userAge: ''
    })
  })
  submit() {
    this.setState(state => ({
      userAge: state.input
    })
  })
}