import React from 'react'
import dataFile from './components/dataFile'
import Firstclass from './components/Firstclass'
import Secondcomponent from './components/Secondcomponent'
import Thirdcomponent from './components/Thirdcomponent'
import Fourthcomponent from './components/Fourthcomponent'
import Fifthcomp from './components/Fifthcomp'
import Sixcomp from './components/Sixcomp'
import Sevencomp from './components/Sevencomp'
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
          <h1>Hello GUYS !</h1>
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
          <h3>Here is my Fourth component !</h3>
          <Fourthcomponent />
        </div>
        <div>
          <Fifthcomp />
        </div>
        <div>
          <Sixcomp />
        </div>
        <div>
          <Sevencomp />
        </div>
      </div>
    );
  }
};

