import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: '',
      adder: '+',
      sub: '-',
      multi: '*',
      divide: '/',
      point: '.'
    };
    this.add = this.add.bind(this);
    this.substract = this.substract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.division = this.division.bind(this);

    this.handlePoint = this.handlePoint.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleResult = this.handleResult.bind(this);
  }
  
  handleClick(e) {
    const value = e.target.value;
    //console.log(value)
    this.setState(state => ({counter: state.counter += value}))
    //console.log(this.state.counter)
  }

  add() { //ajoute un '+' !!!
    this.setState(state => ({counter: state.counter + state.adder}));
  }

  substract() { //moins 1 func
    this.setState(state => ({counter: state.counter + state.sub}));
  }

  multiply() {
    this.setState(state => ({counter: state.counter + state.multi}))
  }

  division() {
    this.setState(state => ({counter: state.counter + state.divide}))
  }

  handlePoint() {
    this.setState(state => ({counter: state.counter + state.point}))
  }

  handleClear() {
    this.setState({counter: ''})
  }

  handleResult() {
    this.setState(state => ({counter: eval(state.counter)}))
    //console.log("length of counter : ", this.state.counter.length)
  }

  render() {
    return (
      <div className="App">
        <h1>Calcultator</h1>
        <div className='calculator'>
          <button id='zero' value={'0'} onClick={(e) => this.handleClick(e)}>0</button>

          <button id='one' value={'1'} onClick={(e) => this.handleClick(e)}>1</button>
          <button id='two' value={'2'} onClick={(e) => this.handleClick(e)}>2</button>

          <button id='three' value={'3'} onClick={(e) => this.handleClick(e)}>3</button>
          <button id='four' value={'4'} onClick={(e) => this.handleClick(e)}>4</button>
          <button id='five' value={'5'} onClick={(e) => this.handleClick(e)}>5</button>

          <button id='six' value={'6'} onClick={(e) => this.handleClick(e)}>6</button>
          <button id='seven' value={'7'} onClick={(e) => this.handleClick(e)}>7</button>
          <button id='height' value={'8'} onClick={(e) => this.handleClick(e)}>8</button>

          <button id='nine' value={'9'} onClick={(e) => this.handleClick(e)}>9</button>

          <button id='add' onClick={this.add}>+</button>
          <button id='substract' onClick={this.substract}>-</button>
          <button id='multiply' onClick={this.multiply}>*</button>
          <button id='divide' onClick={this.division}>/</button>

          <button id='decimal' onClick={this.handlePoint}>.</button>

          <button 
            id='clear'
            onClick={this.handleClear}
          >
            clear
          </button>
          

          <button id='equals' onClick={this.handleResult}>=</button>


          <div id="display">
            counter : {this.state.counter}
          </div>

        </div>

      </div>
    );
  }
}

export default App;
