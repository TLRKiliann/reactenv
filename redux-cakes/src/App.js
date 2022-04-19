import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementone, decrement, logged } from './actions';
import './App.css';


function App() {
  const [number, setNumber] = useState(20);
  const [delivone, setDelivone] = useState(50);
  const [deliv, setDeliv] = useState(100);

  const counter = useSelector(state => state.counter);
  const displayCakes = useSelector(state => state.displayCakes);
  const dispatch = useDispatch(number, deliv, delivone);

  const handleClick = () => {
    dispatch(decrement(number))
    setNumber('');
  }
  return (
    <div className="App">
      <h1>React n Redux !</h1>
      <h3>Number of CAKES : {counter}</h3>

      <input 
        type='text'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder='enter number here'
        className='first--input'
      />

      {number ? <button
        onClick={handleClick}
        style={{padding: '5px 20px'}}>
        Buy
      </button> : ''}

      <p>
        If you click now, it will make {number} cakes sold ! And it keeps {counter - number}.
      </p>

      <input disabled={true} type='text' value={delivone} onChange={(e) => setDelivone(e.target.value)} />

      <button onClick={() => dispatch(incrementone(delivone))}>Delivery</button>
      <p>Delivery of {delivone} cakes arrived and it keeps {counter}.</p>

      <input disabled={true} type='text' value={deliv} onChange={(e) => setDeliv(e.target.value)} />
      
      <button onClick={() => dispatch(increment(deliv))}>Delivery</button>
      <p>Delivery of {deliv} cakes arrived and it keeps {counter}.</p>

      {displayCakes ? <h2 style={{color: 'orange'}}>Total of cackes : {counter}</h2> : ''}
      <button onClick={() => dispatch(logged())}>Total of CACKES !</button>
    </div>
  );
}

export default App;
