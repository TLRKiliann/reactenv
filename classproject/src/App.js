import React from 'react'
import Tocallprops from './components/Tocallprops'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const truck = 'Ici le message de ma props !'
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Presentation was made with class
        </p>
        <a>
          Learn React
        </a>
        <Tocallprops item={truck} />
      </header>
    )
  }
};

export default App;
