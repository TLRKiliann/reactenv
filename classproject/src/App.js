import React from 'react'
//import Card from './components/Card'
import Tocallprops from './components/Tocallprops'
import Main from './components/Main'
import Effects from './components/Effects'
import Practiceclass from './components/Practiceclass'
import Testerinput from './components/Testerinput'
import Myapi from './components/Myapi'
import Myquery from './components/Myquery'
//import 'jquery'
//import './components/Loader.js'
import logo from './logo.svg';
//import './App.scss';
import './App.css';


class App extends React.Component {
  //constructor(props) {
    //super(props);
  //}
  render () {
    const truck = 'Here is a msg from props !'
    const machin = [
      {
        id: 1,
        name: 'kiliann',
        status: 'pro'
      },
      {
        id: 2,
        name: 'jenna',
        status: 'intermediary'
      },
      {
        id: 3,
        name: 'alicia',
        status: 'novice'
      }
    ]
    const miracle = machin.map(item => {
      return (
        `id=${item.id} name=${item.name} status=${item.status}`
      )
    })
    return (
      <div className='main--div'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Presentation was made with class
          </p>
          <div>
            {miracle[0]}
          </div>
          <h4 className='div--text3d'>
            Effect 3D with SCSS(SASS) & CSS
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
        <div className='div--maintester'>
          <Testerinput />
        </div>
        <Myapi />
        <Myquery />
      </div>
    )
  }
};

export default App;
