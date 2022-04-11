import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
    this.add = this.add.bind(this);
    this.substract = this.substract.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  
  handleClick() { // pad nbre
    this.setState({counter: 1})
  }

  add() { //plus 1 func
    this.setState(state => ({counter: state.counter + 1}));
  }

  substract() { //moins 1 func
    this.setState(state => ({counter: state.counter - 1}));
  }
  
  handleClear() {
    this.setState({counter: 0})
  }

  render() {
    return (
      <div className="App">
        <h1>Calcultator</h1>
        <div className='calculator'>
          <button id='zero'>0</button>

          <button id='one' onClick={this.handleClick}>1</button>
          <button id='two' >2</button>

          <button id='three' >3</button>
          <button id='four' >4</button>
          <button id='five' >5</button>

          <button id='six' >6</button>          
          <button id='seven' >7</button>
          <button id='height' >8</button>

          <button id='nine' >9</button>



          <button id='add' onClick={this.add}>+</button>
          <button id='substract' onClick={this.substract}>-</button>



          <button id='multiply'>*</button>
          <button id='divide'>/</button>

          <button id='decimal'>.</button>
        
            
          <button 
            id='clear'
            onClick={this.handleClear}
          >
            clear
          </button>
          

          <button id='equals'>=</button>


          <div id="display">
            counter : {this.state.counter}
          </div>

        </div>

      </div>
    );
  }
}

export default App;
