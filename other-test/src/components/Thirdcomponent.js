import React from 'react'

export default class Thirdcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        thirdobj: props.thirdobj,
        thirdobjTwo: props.thirdobjTwo,
        dataInput: "",
        colstyle: "blue",
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    if (this.state.dataInput.length > 9) {
      this.setState({colstyle: !this.state.colstyle})
    } else {
      return alert("Not enough (10 caracters)!!!")
    }
  }

  handleChange(e) {
    this.setState({ dataInput: e.target.value })
  }

  render() {
    const { colstyle, dataInput } = this.state;
    return (
      <div className='third--comp'>
        <h3>Third component file !</h3>
        <p>{this.props.thirdobj}</p>
        <p>{this.props.thirdobjTwo}</p>

        {dataInput.length < 10 && <input
          value={ dataInput }
          onChange={(e) => this.handleChange(e)}
          placeholder='Enter minimum 10 caracters'
          maxLength="20"
          style={{color: this.setState.colstyle ? 'blue' : 'red'}}
          required />}

        {dataInput.length > 9 && <input
          value={ dataInput }
          onChange={(e) => this.handleChange(e)}
          placeholder='Enter minimum 10 caracters'
          maxLength="20"
          style={{color: colstyle ? 'blue' : 'red'}}
          required />}

        { colstyle &&  <button 
          style={{color: 'white', background: colstyle ? 'red' : 'blue' }} 
          onClick={e => this.toggle(e)}>
            10 string
        </button>}

        { !colstyle &&  <button 
          style={{color: 'white', background: this.setState.colstyle ? 'red' : 'blue' }} 
          onClick={e => this.toggle(e)}>
            Save Ok
        </button>}
        <p>{dataInput}</p>
      </div>
    );
  }
}
