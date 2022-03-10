import React from 'react'
import dataFile from './components/dataFile'
import Firstclass from './components/Firstclass'
import Secondcomponent from './components/Secondcomponent'
import Thirdcomponent from './components/Thirdcomponent'
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
          id={obj.id}
          name={obj.name}
          status={obj.status}
        />
      )
    })
    const toCatchData = dataFile.map(item => {
      return (
        <Firstclass 
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
          <h3>Here is my Firstclass !</h3>
          {toCatchData}
        </div>
        <div>
          <h3>Here is my Second component !</h3>
          {callData}
        </div>
        <div>
          <h3>Here is my Third component !</h3>
          <Thirdcomponent thirdobj={myThirdobj.ref}
          thirdobjTwo={myThirdobj.secref} />
        </div>
      </div>
    );
  }
};

