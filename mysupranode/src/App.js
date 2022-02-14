import React from 'react'
import Secomponent from './components/Secomponent'
import Myfirst from './components/Myfirst'
import dataMyfirst from './components/dataMyfirst'
import Specialcomponent from './components/Specialcomponent'
import Footer from './components/Footer'
import Mylast from './components/Mylast'
import './App.css';

function App() {
  const [num, setNum] = React.useState(0);
  function add() {
    setNum(prevNum => prevNum + 1);
  }

  function minus() {
    setNum(prevNum => prevNum - 1);
  }
  const titleHigh = 'One of my Project';
  const myVar = dataMyfirst.map(item => {
    return (
      <Myfirst
        id={item.id}
        name={item.name}
        status={item.status}
      />
    );
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>{titleHigh}</h1>
      </header>
      <div id='div--myvar' className='div--myvar'>
        {myVar}
      </div>
      <div id='special--div' className='special--div'>
        <Specialcomponent style={{color:'red'}} tweek={'tweeky'}/>
      </div>
      <div className='div--num'>
        <button onClick={add}> + </button>
        <Secomponent num={num} />
        <button onClick={minus}> - </button>
      </div>
      <div className='mythird--div'>
        <Mylast />
      </div>
      <div className='footer--div'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
