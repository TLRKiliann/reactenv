import React from 'react'
import Tocallprops from './component/Tocallprops'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const truck = {id: 'oui'}
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Presentation was made with class
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Tocallprops item={truck.id} />
      </header>
    )
  }
};

export default App;
