import React from 'react'
import Tocallprops from './components/Tocallprops'
import Main from './components/Main'
import Effects from './components/Effects'
import Practiceclass from './components/Practiceclass'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  //constructor(props) {
    //super(props);
  //}
  render () {
    const truck = 'Ici le message de ma props !'
    return (
      <div className='main--div'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Presentation was made with class
          </p>
          <h4>
            Learn React
          </h4>
          <Tocallprops item={truck} />
        </header>
        <Main />
        <div className='div--effects'>
          <Effects />
        </div>
        <div className='div--practice'>
          <h3>My call of Practiceclass from App.js</h3>
          <Practiceclass />
        </div>
      </div>
    )
  }
};

export default App;
