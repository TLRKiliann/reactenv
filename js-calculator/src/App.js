import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0
    }
    this.handleClear = this.handleClear.bind(this);
  }
  
  handleClear(e) {
    const {id} = target.value;
    this.setState(prevState => (
      ...prevState,
      e.id: id ? "" : id.value);
  }

  render() {
    return (
      <div className="App">

        <div className='calculator'>
          <button id='zero' onClick={this.setState({this.state.display: e.target.value})}>0</button>
          <button id='one' onClick={this.setState({this.state.display: 1})}>1</button>
          <button id='two' onClick={this.setState({this.state.display: 2})}>2</button>

          <button id='three' onClick={this.setState({this.state.display: 3})}>3</button>
          <button id='four' onClick={this.setState({this.state.display: 4})}>4</button>
          <button id='five' onClick={this.setState({this.state.display: 5})}>5</button>

          <button id='six' onClick={this.setState({this.state.display: 6})}>6</button>          
          <button id='seven' onClick={this.setState({this.state.display: 7})}>7</button>
          <button id='height' onClick={this.setState({this.state.display: 8})}>8</button>

          <button id='nine' onClick={this.setState({this.state.display: 9})}>9</button>


          <button id='add'>+</button>
          <button id='substract'>-</button>
          <button id='multiply'>*</button>
          <button id='divide'>/</button>


          <button id='decimal'>.</button>
          
          <button id='equals'>=</button>
          
          <button id='clear'
          onClick={(e) => this.handleClear(e)}>clear</button>
        </div>



        <div id="display"
        value={this.state.display}
        onChange={this.handleClear}>{this.state.display}</div>

        Hello !
      </div>
    );
  }
}

export default App;
