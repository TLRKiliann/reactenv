import React from 'react'
import Tocallprops from './components/Tocallprops'
import Main from './components/Main'
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
      </div>
    )
  }
};

export default App;
