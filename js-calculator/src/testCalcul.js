import React from 'react';
import './App.css';


export default class AppCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleLastClear = this.handleLastClear.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleResult = this.handleResult.bind(this);
  }

  handleClick(e) {
    const {result} = this.state;
    const value = e.target.value;
    const operatorPattern = /[+\-*/]/;
    if (result === "" && value === "0") {
      return;
    }

    if (value === ".") {
      const parts = result.split(operatorPattern);
      if (parts[parts.length - 1].includes(".")) {// true if already have '.'
        return;
      }
    }

    if (value !== "-" && operatorPattern.test(value)) {
      const lastStr = result[result.length - 1] || "";
      const secondLastStr = result[result.length - 2] || "";
      if (operatorPattern.test(lastStr)) {
        if (lastStr === "-" && operatorPattern.test(secondLastStr)) {
          this.setState(state => ({result: state.result.slice(0, -2) + value}));
          return;
        } else {
          this.setState(state => ({result: state.result.slice(0, -1) + value}));
          return;
        }
      }
    }
    this.setState(state => ({result: state.result += value}));
  };

  handleLastClear(e) {
    const newCount = this.state.result;
    if (newCount === this.state.result[0]) {
      this.setState({result: ''})
    } else {
      this.setState(state => ({result: state.result.slice(0, -1)}))
    }
    e.preventDefault();
  }

  handleClear() {
    this.setState({result: ''})
  }

  handleResult() {
    this.setState(state => ({result: eval(state.result).toString()}))
  }

  render() {
    return (
      <div className="App">
        <h1>Calcultator</h1>

        <div id="display">
          {this.state.result || '0'}
        </div>

        <div className='calculator'>
          <button id='zero' value={'0'} onClick={(e) => this.handleClick(e)}>0</button>
          <button id='one' value={'1'} onClick={(e) => this.handleClick(e)}>1</button>
          <button id='two' value={'2'} onClick={(e) => this.handleClick(e)}>2</button>

          <button id='three' value={'3'} onClick={(e) => this.handleClick(e)}>3</button>
          <button id='four' value={'4'} onClick={(e) => this.handleClick(e)}>4</button>
          <button id='five' value={'5'} onClick={(e) => this.handleClick(e)}>5</button>

          <button id='six' value={'6'} onClick={(e) => this.handleClick(e)}>6</button>
          <button id='seven' value={'7'} onClick={(e) => this.handleClick(e)}>7</button>
          <button id='eight' value={'8'} onClick={(e) => this.handleClick(e)}>8</button>
          <button id='nine' value={'9'} onClick={(e) => this.handleClick(e)}>9</button>

          <button id='add' value={'+'} onClick={(e) => this.handleClick(e)}>+</button>
          <button id='substract' value={'-'} onClick={(e) => this.handleClick(e)}>-</button>
          <button id='multiply' value={'*'} onClick={(e) => this.handleClick(e)}>*</button>
          <button id='divide' value={'/'} onClick={(e) => this.handleClick(e)}>/</button>

          <button id='decimal' value={'.'} onClick={(e) => this.handleClick(e)}>.</button>

          <button id='last' onClick={(e) => this.handleLastClear(e)}>del last</button>

          <button 
            id='clear'
            onClick={this.handleClear}
          >
            clear
          </button>
          
          <button id='equals' onClick={this.handleResult}>=</button>

        </div>

      </div>
    );
  }
}

