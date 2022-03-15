import React from 'react'
import dataFile from './components/dataFile'
import Firstclass from './components/Firstclass'
import Secondcomponent from './components/Secondcomponent'
import Thirdcomponent from './components/Thirdcomponent'
import Fourthcomponent from './components/Fourthcomponent'
import Fifthcomp from './components/Fifthcomp'
import Sixcomp from './components/Sixcomp'
import Sevencomp from './components/Sevencomp'
import Eightcomp from './components/Eightcomp'
import Ninecomp from './components/Ninecomp'
import Tencomp from './components/Tencomp'
import './App.css';

export default class App extends React.Component {
  render() {
    const myThirdobj = {
      ref: "Hey I'm third obj",
      secref: 46
    };
    const callData = dataFile.map(obj => {
      return (
        <Secondcomponent
          key={obj.id}
          id={obj.id}
          name={obj.name}
          status={obj.status}
        />
      )
    })
    const toCatchData = dataFile.map(item => {
      return (
        <Firstclass
          key={item.id}
          id={item.id} 
          name={item.name}
          status={item.status}
        />
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1>Some Components n'Stylish Dependencies !</h1>
          <p>Some stuff :<em> @material-ui, jQuery, useEffect, hooks...</em></p>
        </header>
        <div>
          <h3>Here is my "Firstclass" !</h3>
          <div className='catdata--class'>
            {toCatchData}
          </div>
        </div>
        <div>
          <h3>Here is my Second component !</h3>
        </div>
        <div className='seccomp--class'>
          {callData}
        </div>
        <div>
          <h3>Here is my Third component !</h3>
          <Thirdcomponent
            id={myThirdobj.ref} 
            thirdobj={myThirdobj.ref}
            thirdobjTwo={myThirdobj.secref} />
        </div>
        <div>
          <h3>Here is my Fourth component (@materia) !</h3>
          <Fourthcomponent />
        </div>
        <div
          style={{border: '1px solid cyan',
            margin: '10px 400px', padding: '20px 0px'}}>
          Here is my Fifthcomp toggle()  
          <Fifthcomp />
        </div>
        <div>
          Here is my Sixcomp useEffect((),[])
          <Sixcomp />
        </div>
        <div>
          Here is my Sevencomp componentDidMount() - componentWillUnmount() - class
          <Sevencomp />
        </div>
        <div>
          Here is my Eightcomp jQuery - componentDidMount() - class
          <Eightcomp />
        </div>
        <div>
          Here is my Ninecomp localStorage - componentDidMount - class
          <Ninecomp />
        </div>
        <div>
          Here is my Tencomp state tests
          <Tencomp />
        </div>
      </div>
    );
  }
};

