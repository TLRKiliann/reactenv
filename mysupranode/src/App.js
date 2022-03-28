import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Orbit from './components/Orbit'
import Myfirst from './components/Myfirst'
import dataMyfirst from './components/dataMyfirst'
import Secomponent from './components/Secomponent'
import Counter from './components/Counter'
import Mostwanted from './components/Mostwanted'
import Lastwanted from './components/Lastwanted'
import Specialcomponent from './components/Specialcomponent'
import Finalcount from './components/Finalcount'
import Mylast from './components/Mylast'
import Car from './components/Car'
import Footer from './components/Footer'
import Items from './components/Items'
import './App.css';
import './styles/style.css';

function App() {
  const [num, setNum] = React.useState(0);
  const [count, setCounter] = React.useState(true);

  function add() {
    setNum(prevNum => prevNum + 1);
  }

  function minus() {
    setNum(prevNum => prevNum - 1);
  }

  function sayOk() {
    setCounter(prevCount => !prevCount)
  }

  const titleHigh = 'One of my Project';
  const myVar = dataMyfirst.map(item => {
    return (
      <Myfirst
        id={item.id}
        name={item.name}
        age={item.age}
        status={item.status}
      />
    );
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>{titleHigh}</h1>
      </header>
      <Orbit />
      <div id='div--myvar' className='div--myvar'>
        {myVar}
      </div>
      <div onClick={sayOk} className='div--click'>
        <Counter mycount={count} />
      </div>
      <div className='div--mostwanted'>
        <Mostwanted />
      </div>
      <div className='div-lastwanted'>
        <Lastwanted />
      </div>
      <div className='final--div'>
        <Finalcount />
      </div>
      <div id='special--div' className='special--div'>
        <Specialcomponent style={{color:'red'}} mytweek={'tweeky'}/>
      </div>
      <div className='div--num'>
        <button onClick={add}> + </button>
        <Secomponent mynum={num} />
        <button onClick={minus}> - </button>
      </div>
      <div className='mythird--div'>
        <Mylast />
      </div>
      <Car />
      <div className='footer--div'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

class ClassTruc extends React.Component {
  //constructor(props) {
    //super(props);
  //}
  render() {
    Items.PropTypes = { quantity: PropTypes.number.isRequired }
    Items.defaultProps = { quantity: 1010011101 }
    return <Items />
  }
};

ReactDOM.render(<ClassTruc />, document.getElementById('root'));
